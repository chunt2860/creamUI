<template>
  <bp-space type="vertical" size="small">
    <bp-select v-model="val" placeholder="请选择" style="width: 220px">
      <bp-option value="1">选项 1</bp-option>
      <bp-option value="2">选项 2</bp-option>
      <bp-option value="3">选项 3</bp-option>
      <bp-option value="4">选项 4</bp-option>
    </bp-select>

    <bp-select v-model="val1" placeholder="请选择" style="width: 220px">
      <bp-option :value="true">是</bp-option>
      <bp-option :value="false">否</bp-option>
    </bp-select>
  </bp-space>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref();
const val1 = ref();
</script>
