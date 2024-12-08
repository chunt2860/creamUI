<template>
  <p class="font-size-13px m-2px! opacity60">类型</p>
  <bp-radio-group v-model="type" class="mb-10" type="button">
    <bp-radio value="horizontal">水平</bp-radio>
    <bp-radio value="vertical">垂直</bp-radio>
  </bp-radio-group>

  <bp-space :type align="center">
    <bp-avatar :style="{ background: '#165dff', color: '#fff' }">BP</bp-avatar>
    <bp-tag status="primary">标签一</bp-tag>
    <bp-switch></bp-switch>
    <bp-link>链接一</bp-link>
  </bp-space>
</template>

<script setup lang="ts">
import { ref } from "vue";

const type = ref("horizontal");
</script>
