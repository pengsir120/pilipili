<template>
  <div class="w-full h-62">
    <!-- 视频预览画面 -->
    <a href="#">
      <div class="w-full h-43.5 overflow-hidden rounded-md">
        <img :src="data.cover" class="w-full h-full object-cover">
      </div>
    </a>

    <!-- 底部描述 -->
    <div class="flex">
      <div class="w-full h-16 mt-2.5 text-[15px] flex-1">
        <h3 :title="data.title" class="w-full h-11 pr-6 line-clamp-2 text-ellipsis cursor-pointer">
          {{data.title}}
        </h3>
        <div class="w-full h-fit mt-1 leading-4 flex justify-start justify-items-center text-[13px] text-regal-gray">
          <span :title="data.user.username">
            {{data.user.username}}
          </span>
          <span class="ml-1">
            · {{moment(data.updateAt).fromNow()}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import moment from 'moment'

const props = defineProps({
  data: Object
})

</script>
