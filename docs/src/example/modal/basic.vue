<template>
  <bp-button @click="show = true">open modal</bp-button>

  <bp-modal v-model="show" title="Title" width="500px">
    <bp-popconfirm> Modal Content </bp-popconfirm>
    <bp-button @click="Message.success('这是一条提示信息')">Click</bp-button>

    <bp-select v-model="val" placeholder="Please select" clearable style="width: 180px">
      <bp-option value="1">Option 1</bp-option>
      <bp-option value="2">Option 2</bp-option>
      <bp-option value="3">Option 3</bp-option>
      <bp-option value="4">Option 4</bp-option>
    </bp-select>
  </bp-modal>
</template>

<script lang="ts" setup>
import { Message } from "@birdpaper-ui/components";
import { ref } from "vue";

const show = ref(false);
const val = ref("");
</script>
