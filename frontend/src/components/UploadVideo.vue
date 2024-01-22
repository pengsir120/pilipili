<template>
  <a-modal v-model:open="visible" @ok="handleOk" :zIndex="2000">
    <a-form
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      layout="horizontal"
      style="max-width: 600px"
    >
      <a-form-item label="标题">
        <a-input v-model:value="form.title" />
      </a-form-item>
      <a-form-item label="时长">
        <a-input disabled v-model:value="form.duration" />
      </a-form-item>
      <a-form-item label="上传">
        <a-upload :customRequest="uploadVideo" list-type="picture-card">
          <div>
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

const visible = ref(false)

const handleOk = () => {
  $request({
    url: '/video/createvideo',
    method: 'POST',
    data: form.value
  }).then(res => {
    console.log(res);
    if(res.status == 201) {
      $bus.emit('getVideoList')
      visible.value = false
    }
  })
}

const show = () => {
  visible.value = true
}

const labelCol = { style: { width: '150px' } };
const wrapperCol = { span: 14 };

const form = ref({})

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