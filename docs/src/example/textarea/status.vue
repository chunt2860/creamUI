<template>
  <bp-space>
    <bp-textarea v-model="txt" clearable placeholder="请输入内容" />
    <bp-textarea readonly v-model="txt" placeholder="请输入内容" />
    <bp-textarea disabled v-model="txt" placeholder="请输入内容" />
  </bp-space>
</template>

<script setup lang="ts">
import { ref } from "vue";
const txt = ref("文本内容");
</script>
