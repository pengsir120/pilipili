<template>
  <div v-if="visible">
    123
  </div>
</template>

<script setup>
import { defineProps } from "vue"
defineProps({
  visible: {
    type: Boolean,
    default() {
      return true
    }
  }
})
</script>