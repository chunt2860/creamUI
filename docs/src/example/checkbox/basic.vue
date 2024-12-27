<template>
  <bp-space>
    <bp-checkbox v-model="val">选项一</bp-checkbox>
    <bp-checkbox v-model="val" disabled>禁用选项</bp-checkbox>
  </bp-space>
</template>

<script setup lang="ts">
import { ref } from "vue";
const val = ref(false);
</script>
