<template>
  {{ val }}
  <div style="padding: 100px">
    <bp-color-picker v-model="val"></bp-color-picker>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const val = ref("#f50000c7");
</script>
