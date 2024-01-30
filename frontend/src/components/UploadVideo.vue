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
      <a-form-item label="上传">
        <a-upload v-model:file-list="fileList" :customRequest="uploadVideo" @remove="uploadRemove" list-type="picture-card">
          <div v-if="fileList.length < 1">
            <PlusOutlined />
            <div style="margin-top: 8px">Upload</div>
          </div>
        </a-upload>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script setup>
import { ref } from "vue"
import { PlusOutlined } from '@ant-design/icons-vue';
import { getVideoTime } from '@/utils/getVideoInfo'
import userGetGlobalProperties from '@/utils/userGetGlobalProperties'

const { $bus, $request } = userGetGlobalProperties()

const labelCol = { style: { width: '150px' } };
const wrapperCol = { span: 14 };
const visible = ref(false)
const form = ref({})
const fileList = ref([])
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

const uploadVideo = async ({file, onProgress, onSuccess}) => {
  const video = document.createElement("video")
  video.preload = 'metadata'
  video.src = URL.createObjectURL(file)
  const reqData = await new Promise((resolve, reject) => {
    video.onloadedmetadata = () => {
      URL.revokeObjectURL(video.src)
      const formData = new FormData()
      formData.append("file", file)
      const duration = getVideoTime(video.duration)
      form.value.duration = duration
      formData.append("metaData", JSON.stringify({
        duration
      }))
      resolve(formData)
    }
  })
  
  const res = await $request({
    url: "/video/upload",
    method: "post",
    data: reqData,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  form.value.url = res.data.url
  onSuccess()
}

defineExpose({
  show
})
</script>