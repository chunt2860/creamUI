<template>
  <bp-radio-group v-model="size" class="mb-5" type="button">
    <bp-radio value="mini">迷你</bp-radio>
    <bp-radio value="small">小型</bp-radio>
    <bp-radio value="default">普通</bp-radio>
    <bp-radio value="large">大型</bp-radio>
  </bp-radio-group>

  <bp-select v-model="val" :size placeholder="请选择" clearable style="width: 220px">
    <bp-option value="1">选项 1</bp-option>
    <bp-option value="2">选项 2</bp-option>
    <bp-option value="3">选项 3</bp-option>
    <bp-option value="4">选项 4</bp-option>
  </bp-select>
</template>

<script setup lang="ts">
import { ref } from "vue";

const size = ref("default");
const val = ref();
</script>
