<template>
  <bp-steps>
    <bp-step>Succeeded</bp-step>
    <bp-step>Processing</bp-step>
    <bp-step>Pending</bp-step>
  </bp-steps>
</template>

<script setup lang="ts">
import { ref } from "vue";

const current = ref(0);
</script>
