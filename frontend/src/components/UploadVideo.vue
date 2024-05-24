<template>
  <a-modal 
    v-model:open="visible" 
    @ok="handleOk" 
    @cancel="handleCancel" 
    title="创建视频" 
    :zIndex="2000"
    okText="创建"
    cancelText="取消"
  >
    <a-form
      ref="formRef"
      :model="form"
      :rules="rules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      layout="horizontal"
      style="max-width: 600px"
    >
      <a-form-item label="标题" name="title">
        <a-input v-model:value="form.title" />
      </a-form-item>
      <a-form-item label="时长" name="duration">
        <a-input disabled v-model:value="form.duration" />
      </a-form-item>
      <a-form-item label="上传视频">
        <a-upload v-model:file-list="fileList" :customRequest="uploadVideo" @remove="uploadRemove" list-type="picture-card" accept="video/*">
          <div v-if="fileList.length < 1">
            <PlusOutlined />
            <div style="margin-top: 8px">Upload</div>
          </div>
        </a-upload>
      </a-form-item>
      <a-form-item label="上传封面">
        <a-upload v-model:file-list="picFileList" :customRequest="uploadPic" @preview="previewVisible = true" list-type="picture-card" accept="image/*">
          <div v-if="picFileList.length < 1">
            <PlusOutlined />
            <div style="margin-top: 8px">Upload</div>
          </div>
        </a-upload>
      </a-form-item>
    </a-form>
    <a-modal :open="previewVisible" :footer="null" @cancel="previewVisible = false" :zIndex="2024">
      <img style="width: 100%" :src="previewImage" />
    </a-modal>
  </a-modal>
</template>

<script setup>
import { ref } from "vue"
import { PlusOutlined } from '@ant-design/icons-vue';
import { getVideoHash, captureFrame, getVideoDuration, CHUNK_SIZE } from '@/utils/getVideoInfo'
import userGetGlobalProperties from '@/utils/userGetGlobalProperties'

const { $bus, $request } = userGetGlobalProperties()

const labelCol = { style: { width: '150px' } };
const wrapperCol = { span: 14 };
const visible = ref(false)
const previewVisible = ref(false)
const form = ref({})
const fileList = ref([])
const picFileList = ref([])
const formRef = ref()
const rules = ref({
  title: [{ required: true, message: '请输入标题', trigger: 'change' }],
  duration: [{ required: true, message: '请上传视频', trigger: 'change' }],
})

const show = () => {
  visible.value = true
}
const handleCancel = () => {
  form.value = {}
  fileList.value = []
  picFileList.value = []
  formRef.value.resetFields()
  visible.value = false
}
const uploadRemove = () => {
  form.value.duration = undefined
}

const handleOk = () => {
  formRef.value.validate().then(() => {
    $request({
      url: '/video/createvideo',
      method: 'POST',
      data: form.value
    }).then(res => {
      if(res.status == 201) {
        $bus.emit('getVideoList')
        handleCancel()
      }
    })
  })
  
}

const fileExist = async (objectName) => {
  const res = await $request({
    url: "/file/exist",
    method: "get",
    params: {
      objectName
    }
  })
  return res.data
}

const createFileChunks = file => {
  const chunks = []
  // 大于1GB
  if(file.size > CHUNK_SIZE * 300) {
    const size = CHUNK_SIZE
    let cur = 0
    while (cur < file.size) {
      chunks.push({
        index: cur,
        fileChunk: file.slice(cur, cur + size)
      })
      cur += size
    }
    return {
      chunks,
      isMultiple: true
    }
  }
  return {
    chunks: file,
    isMultiple: false
  }
}

const uploadVideo = async ({file, onProgress, onSuccess}) => {
  const mimeType = file.type.split('/')[1]
  const { chunks, isMultiple } = createFileChunks(file)
  const fileHash = await getVideoHash(chunks, isMultiple)
  let { isFileExist, url } = await fileExist(`${fileHash}.${mimeType}`)
  const duration = await getVideoDuration(file)

  // 视频封面
  if(picFileList.value.length == 0) {
    const coverInfo = await captureFrame(file, Math.random() * duration)
    console.log(coverInfo);
    const picMd5 = await getVideoHash(coverInfo.file)
    const picFormData = new FormData()
    picFormData.append("fileHash", picMd5)
    picFormData.append('file', coverInfo.file)
    const picRes = await $request({
      url: "/file/upload",
      method: "post",
      data: picFormData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    const picResUrl = picRes.data.url
    form.value.cover = picResUrl
    picFileList.value = [{
      uid: -1,
      name: coverInfo.name,
      status: 'done',
      url: picResUrl
    }]
    previewImage.value = picResUrl || coverInfo.url
  }
  
  if(!isFileExist) {
    if(isMultiple) {
      const promiseList = []
      for(let i = 0; i < chunks.length; i++) {
        const blobFile = new File([chunks[i].fileChunk], `${fileHash}-${i}`)
        const formData = new FormData()
        formData.append('file', blobFile)
        await $request({
          url: "/file/multipleUpload",
          method: "post",
          data: formData,
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        // promiseList.push(p)
      }
      // await Promise.all(promiseList)
      const res = await $request({
        url: "/file/merge",
        method: "post",
        data: {
          fileHash,
          mimeType
        }
      })
      url = res.data.url
    }else {
      const videoFormData = new FormData()
      videoFormData.append("file", file)
      videoFormData.append("fileHash", fileHash)
      const res = await $request({
        url: "/file/upload",
        method: "post",
        data: videoFormData,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      url = res.data.url
    }
  }

  form.value.duration = duration
  form.value.fileHash = fileHash
  form.value.url = url
  onSuccess()
}

const previewImage = ref('')
const uploadPic = async ({file, onProgress, onSuccess}) => {
  const picMd5 = await getVideoHash(file)
  const picFormData = new FormData()
  picFormData.append("fileHash", picMd5)
  picFormData.append('file', file)
  
  const res = await $request({
    url: "/file/upload",
    method: "post",
    data: picFormData,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  previewImage.value = res.data.url
  form.value.cover = res.data.url
  onSuccess()
}



defineExpose({
  show
})
</script>