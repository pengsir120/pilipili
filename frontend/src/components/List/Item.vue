<template>
  <div class="w-full h-62 bg-white">
    <!-- 视频预览画面 -->
    <a href="#">
      <div class="w-full h-43.5 rounded-md bg-orange-600">

      </div>
    </a>

    <!-- 底部描述 -->
    <div class="flex">
      <div class="w-full h-16 mt-2.5 bg-zinc-200 text-[15px] flex-1">
        <h3 class="w-full h-11 pr-6 line-clamp-2 text-ellipsis" :title="data.title">
          {{data.title}}
        </h3>
        <div class="w-full h-fit mt-1 leading-4 flex justify-start justify-items-center text-[13px] text-regal-gray">
          <span>
            大力王
          </span>
          <span class="ml-1">
            · 21小时前
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  data: Object
})

</script>
