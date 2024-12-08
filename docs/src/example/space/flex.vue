<template>
  <p class="font-size-13px m-2px! opacity60">Justify</p>
  <bp-radio-group v-model="justify" class="mb-10" type="button">
    <bp-radio value="flex-start">flex-start</bp-radio>
    <bp-radio value="flex-end">flex-end</bp-radio>
    <bp-radio value="center">center</bp-radio>
    <bp-radio value="space-between">space-between</bp-radio>
    <bp-radio value="space-evenly">space-evenly</bp-radio>
    <bp-radio value="space-around">space-around</bp-radio>
  </bp-radio-group>

  <p class="font-size-13px m-2px! opacity60">Align</p>
  <bp-radio-group v-model="align" class="mb-10" type="button">
    <bp-radio value="flex-start">flex-start</bp-radio>
    <bp-radio value="flex-end">flex-end</bp-radio>
    <bp-radio value="center">center</bp-radio>
    <bp-radio value="baseline">baseline</bp-radio>
  </bp-radio-group>

  <bp-space :align :justify>
    <bp-avatar :style="{ background: '#165dff', color: '#fff' }">BP</bp-avatar>
    <bp-tag status="primary">标签一</bp-tag>
    <bp-switch></bp-switch>
    <bp-link>链接一</bp-link>
  </bp-space>
</template>

<script setup lang="ts">
import { ref } from "vue";

const justify = ref("flex-start");
const align = ref("flex-start");
</script>
