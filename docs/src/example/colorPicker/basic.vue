<template>
  {{ val }}
  <div style="padding: 100px">
    <bp-color-picker v-model="val" valueType="hex"></bp-color-picker>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const val = ref("#4695ed");
</script>
