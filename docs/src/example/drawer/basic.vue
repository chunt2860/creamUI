<template>
  <bp-space>
    <bp-button @click="handleOpen('right')">Open Right</bp-button>
    <bp-button @click="handleOpen('up')">Open up</bp-button>
    <bp-button @click="handleOpen('left')">Open left</bp-button>
    <bp-button @click="handleOpen('down')">Open down</bp-button>
  </bp-space>

  <bp-drawer v-model="show" :placement> </bp-drawer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const show = ref(false);
const placement = ref("right");

const handleOpen = (p: string) => {
  placement.value = p;
  show.value = true;
};
</script>
