<template>
  <video ref="videoPlayer" class="video-js"></video>
</template>

<script setup>
import videojs from 'video.js';
import { ref, onMounted, onBeforeUnmount, defineProps } from 'vue'

defineProps({
  options: {
    type: Object,
    default(rawProps) {
      return {}
    }
  }
})

const player = ref(null)

onMounted(() => {
  player.value = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady() {
    console.log('onPlayerReady', this);
})
})

onBeforeUnmount(() => {
  if (player.value) {
    player.value.dispose()
  }
})
</script>
