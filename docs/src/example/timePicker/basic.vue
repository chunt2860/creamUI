<template>
  <bp-time-picker v-model="time" :style="{ width: '180px' }" clearable placeholder="请选择" />
</template>

<script setup lang="ts">
import { ref } from "vue";

const time = ref("");
</script>
