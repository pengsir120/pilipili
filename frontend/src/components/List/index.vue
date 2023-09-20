<template>
  <div class="grid grid-cols-5 gap-5">
    <Item v-for="i in 16" :key="i" />
  </div>
</template>

<script setup>
import Item from './Item.vue'
</script>