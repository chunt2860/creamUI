<template>
  <bp-space>
    <bp-color-picker v-for="size in sizeList" :size v-model="val" valueType="hex"></bp-color-picker>
  </bp-space>
</template>

<script setup lang="ts">
import { ref } from "vue";
const val = ref("#3B486666");

const sizeList = ["large", "default", "small", "mini"];
</script>
