<template>
  <a-modal v-model:open="visible" @ok="handleOk" :zIndex="2000">
    <a-form
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      layout="horizontal"
      style="max-width: 600px"
    >
      <a-form-item label="标题">
        <a-input />
      </a-form-item>
      <a-form-item label="时长">
        <a-input disabled />
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
import getVideoTime from '@/utils/getVideoTime'
import userGetGlobalProperties from '@/utils/userGetGlobalProperties'

const visible = ref(false)

const handleOk = () => {

}

const { $request } = userGetGlobalProperties()

const show = () => {
  visible.value = true
}

const labelCol = { style: { width: '150px' } };
const wrapperCol = { span: 14 };

const uploadVideo = (file) => {
  const video = document.createElement("video")
  video.preload = 'metadata'
  video.src = URL.createObjectURL(file.file)
  video.onloadedmetadata = () => {
    URL.revokeObjectURL(video.src)
    const formData = new FormData()
    formData.append("file", file.file)
    formData.append("metaData", JSON.stringify({
      duration: getVideoTime(video.duration)
    }))
    $request({
      url: "/video/upload",
      method: "post",
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(res => {

    })
  }
}

defineExpose({
  show
})
</script>