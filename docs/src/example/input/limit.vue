<template>
  <bp-input v-model="txt" style="width: 180px" :maxlength="11" show-limit clearable placeholder="请输入内容" />
</template>

<script setup lang="ts">
import { ref } from "vue";
const txt = ref("");
</script>
