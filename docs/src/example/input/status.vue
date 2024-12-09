<template>
  <bp-space>
    <bp-input v-model="txt" clearable placeholder="请输入内容"></bp-input>
    <bp-input readonly v-model="txt" placeholder="请输入内容"></bp-input>
    <bp-input disabled v-model="txt" placeholder="请输入内容"></bp-input>
  </bp-space>
</template>

<script setup lang="ts">
import { ref } from "vue";
const txt = ref("文本内容");
</script>
