<template>
  <video id="plyr-player" playsinline controls :data-poster="options.poster">
    <source :src="options.source" type="video/mp4" />

      <!-- Captions are optional -->
    <!-- <track kind="captions" label="English captions" src="/path/to/captions.vtt" srclang="en" default /> -->
  </video>
</template>

<script setup>
import Plyr from 'plyr';
import "plyr/dist/plyr.css";
import { ref, onMounted, onBeforeUnmount, defineProps } from 'vue'


const props = defineProps({
  options: {
    type: Object,
    default(rawProps) {
      return {}
    }
  }
})

onMounted(() => {
  const player = new Plyr('#plyr-player', {
  // debug: true,
  title: 'View From A Blue Moon',
  // iconUrl: 'dist/demo.svg',
  // keyboard: {
  //   global: true,
  // },
  // tooltips: {
  //   controls: true,
  // },
  // captions: {
  //   active: true,
  // },
  // previewThumbnails: {
  //   enabled: true,
  //   src: ['https://cdn.plyr.io/static/demo/thumbs/100p.vtt', 'https://cdn.plyr.io/static/demo/thumbs/240p.vtt'],
  // },
  // vimeo: {
  //   // Prevent Vimeo blocking plyr.io demo site
  //   referrerPolicy: 'no-referrer',
  // },
  // mediaMetadata: {
  //   title: 'View From A Blue Moon',
  //   album: 'Sports',
  //   artist: 'Brainfarm',
  //   artwork: [
  //     {
  //       src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
  //       type: 'image/jpeg',
  //     },
  //   ],
  // },
  // markers: {
  //   enabled: true,
  //   points: [
  //     {
  //       time: 10,
  //       label: 'first marker',
  //     },
  //     {
  //       time: 40,
  //       label: 'second marker',
  //     },
  //     {
  //       time: 120,
  //       label: '<strong>third</strong> marker',
  //     },
  //   ],
  // },
});
})


</script>