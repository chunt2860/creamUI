<template>
  <bp-space type="vertical">
    <bp-date-picker v-model="val" hide-trigger style="width: 200px" placeholder="请选择"> </bp-date-picker>
    <bp-date-picker v-model="val1" hide-trigger show-time style="width: 200px" placeholder="请选择"> </bp-date-picker>
  </bp-space>
</template>

<script setup lang="ts">
import { ref } from "vue";
const val = ref();
const val1 = ref();
</script>
