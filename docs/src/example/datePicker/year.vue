<template>
  <bp-year-picker v-model="val" style="width: 200px" placeholder="请选择" />
</template>

<script setup lang="ts">
import { ref } from "vue";
const val = ref();
</script>
