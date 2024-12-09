<template>
  <bp-textarea v-model="txt" :maxlength="220" show-limit clearable placeholder="请输入内容" />
</template>

<script setup lang="ts">
import { ref } from "vue";
const txt = ref("");
</script>
