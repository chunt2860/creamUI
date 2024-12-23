<template>
  <bp-switch v-model="val" check-text="开启" uncheck-text="关闭"></bp-switch>
</template>

<script setup lang="ts">
import { ref } from "vue";
const val = ref(false);
</script>
