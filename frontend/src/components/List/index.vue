<template>
  <div class="grid grid-cols-5 gap-5">
    <Item v-for="(item, index) in videoList" :data="item" :key="index" />
  </div>
</template>

<script setup>
import Item from './Item.vue'
import { onMounted, ref } from 'vue'
import userGetGlobalProperties from '../../utils/userGetGlobalProperties'

const { $request, $bus } = userGetGlobalProperties()
const videoList = ref({})

const getVideoList = (params = {}) => {
  console.log(params);
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

</script>