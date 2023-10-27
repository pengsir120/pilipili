<template>
  <video ref="videoPlayer" class="video-js"></video>
</template>

<script setup>
import videojs from 'video.js';
import { ref, onMounted, onBeforeUnmount, defineProps } from 'vue'

const props = defineProps({
  options: {
    type: Object,
    default(rawProps) {
      return {}
    }
  }
})

const player = ref(null)
const videoPlayer = ref(null)
onMounted(() => {
  player.value = videojs(videoPlayer.value, props.options, function onPlayerReady() {
    console.log('onPlayerReady');
})
})

onBeforeUnmount(() => {
  if (player.value) {
    player.value.dispose()
  }
})
</script>
