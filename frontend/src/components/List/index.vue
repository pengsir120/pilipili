<template>
  <div class="grid grid-cols-5 gap-5">
    <Item v-for="(item, index) in videoList" :data="item" :key="index" @click="handleItemClick(item)" />
  </div>
</template>

<script setup>
import Item from './item.vue'
import { onMounted, ref } from 'vue'
import userGetGlobalProperties from '@/utils/userGetGlobalProperties'
import { useRouter } from 'vue-router'

const { $request, $bus } = userGetGlobalProperties()
const videoList = ref({})

const getVideoList = (params = {}) => {
  $request({
    url: '/api/v1/video/videolist',
    params: {
      pageNum: 1,
      pageSize: 20,
      ...params
    }
  }).then(res => {
    videoList.value = res.data.videolist
  })
}

onMounted(() => {
  getVideoList()
})

$bus?.on('getVideoList', getVideoList)

const router = useRouter()
const handleItemClick = (item) => {
  router.push({
    path: '/detail',
    query: {
      videoId: item._id
    }
  })
}
</script>