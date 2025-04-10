<template>
  <bp-steps>
    <bp-step description="Description one">Succeeded</bp-step>
    <bp-step description="Description two">Processing</bp-step>
    <bp-step description="Description Three">Pending</bp-step>
  </bp-steps>
</template>

<script setup lang="ts">
import { ref } from "vue";

const current = ref(0);
</script>
