<template>
  <div class="h-45 5xl:h-60 relative z-[1002]" >
    <div class="absolute inset-x-0 inset-y-0 overflow-hidden z-[-10]">
      <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <img class="w-full h-full" src="@/assets/head_bg.webp" alt="">
      </div>
    </div>

    <Header />
  </div>
  
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
</script>