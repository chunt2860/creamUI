<template>
  {{ val }}
  <bp-rate v-model="val" />
</template>

<script lang="ts" setup>
import { ref } from "vue";

const val = ref(0);
</script>
