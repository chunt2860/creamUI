<template>
  <bp-year-picker v-model="val" style="width: 200px" placeholder="请选择"> </bp-year-picker>
</template>

<script setup lang="ts">
import { ref } from "vue";
const val = ref();
</script>
