<template>
  <a-modal v-model:open="visible" @ok="handleOk" :zIndex="2000">
    123
  </a-modal>
</template>

<script setup>
import { ref } from "vue"

const visible = ref(false)

const handleOk = () => {

}
</script>