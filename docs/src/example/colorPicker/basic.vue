<template>
  {{ val }}
  <div style="padding: 100px">
    <bp-color-picker v-model="val" valueType="rgb"></bp-color-picker>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const val = ref("rgb(22,93,255)");
</script>
