<template>
  <div class="grid grid-cols-5 gap-5">
    <Item v-for="(item, index) in videoList" :data="item" :key="index" />
  </div>
</template>

<script setup>
import Item from './Item.vue'
import { onMounted, getCurrentInstance, ref } from 'vue'

const instance = getCurrentInstance()
const videoList = ref({})




onMounted(() => {
  instance.proxy.$request({
    url: '/api/v1/video/videolist',
    params: {
      pageNum: 1,
      pageSize: 20
    }
  }).then(res => {
    videoList.value = res.data.videolist
  })
})
</script>