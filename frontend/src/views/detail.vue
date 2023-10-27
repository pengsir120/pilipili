<template>
  <Header :isIndex="false" />
  <div class="mt-16">
    <VideoPlayer :options="videoOptions" />
  </div>
</template>

<script setup>
import Header from '@/components/header.vue'
import VideoPlayer from '@/components/videoPlayer.vue'
import userGetGlobalProperties from '@/utils/userGetGlobalProperties'
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'

const { $request } = userGetGlobalProperties()

const videoOptions = ref({
  autoplay: true,
  controls: true,
  sources: []
})

const route = useRoute()
const getVideoDetail = () => {
  $request({
    url: `/api/v1/video/video/${route.query.videoId}`
  }).then(res => {
    console.log(res.data.vod.PlayInfoList.PlayInfo[0]['PlayURL']);
    videoOptions.value.sources.push({
      src: res.data.vod.PlayInfoList.PlayInfo[0]['PlayURL'],
      type: "video/mp4"
    })
  })
}

onMounted(() => {
  getVideoDetail()
})
</script>