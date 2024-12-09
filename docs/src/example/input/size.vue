<template>
  <bp-radio-group v-model="size" class="mb-5" type="button">
    <bp-radio value="mini">迷你</bp-radio>
    <bp-radio value="small">小型</bp-radio>
    <bp-radio value="default">普通</bp-radio>
    <bp-radio value="large">大型</bp-radio>
  </bp-radio-group>

  <bp-input style="width: 240px" :size clearable placeholder="请输入内容"></bp-input>
</template>

<script setup lang="ts">
import { ref } from "vue";

const size = ref("default");
</script>
