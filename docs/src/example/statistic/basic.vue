<template>
  <bp-button size="small" type="plain" @click="random" style="margin-bottom: 20px;">切换</bp-button>

  <bp-statistic :value />
</template>

<script setup lang="ts">
import { ref } from "vue";

const value = ref(12345678);

const random = () => {
  value.value = Math.floor(Math.random() * 9999999) + 1;
};
</script>
