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
  i18n: {
    restart: 'Restart',
    rewind: 'Rewind {seektime}s',
    play: 'Play',
    pause: 'Pause',
    fastForward: 'Forward {seektime}s',
    seek: 'Seek',
    seekLabel: '{currentTime} of {duration}',
    played: 'Played',
    buffered: 'Buffered',
    currentTime: 'Current time',
    duration: 'Duration',
    volume: 'Volume',
    mute: 'Mute',
    unmute: 'Unmute',
    enableCaptions: 'Enable captions',
    disableCaptions: 'Disable captions',
    download: 'Download',
    enterFullscreen: 'Enter fullscreen',
    exitFullscreen: 'Exit fullscreen',
    frameTitle: 'Player for {title}',
    captions: 'Captions',
    settings: 'Settings',
    pip: 'PIP',
    menuBack: 'Go back to previous menu',
    speed: '倍速',
    normal: '1.0',
    quality: 'Quality',
    loop: 'Loop',
    start: 'Start',
    end: 'End',
    all: 'All',
    reset: 'Reset',
    disabled: 'Disabled',
    enabled: 'Enabled',
    advertisement: 'Ad',
    qualityBadge: {
      2160: '4K',
      1440: 'HD',
      1080: 'HD',
      720: 'HD',
      576: 'SD',
      480: 'SD',
    },
  },
  autoplay: true,
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