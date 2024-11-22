<template>
  <bp-button @click="show = true">open modal</bp-button>

  <bp-modal v-model="show" title="Title" width="500px">
    Modal Content
  </bp-modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const show = ref(false);
</script>