<template>
  <bp-input v-model="psw" type="password" style="width: 180px" clearable placeholder="请输入密码" />
</template>

<script setup lang="ts">
import { ref } from "vue";
const psw = ref("");
</script>
