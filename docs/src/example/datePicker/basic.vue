<template>
  <bp-space>
    <bp-date-picker show-time v-model="val" style="width: 200px" placeholder="请选择"> </bp-date-picker>
    <bp-date-picker v-model="val" hide-trigger style="width: 200px" placeholder="请选择"> </bp-date-picker>
  </bp-space>
  <div style="margin: 10px 0">
    <bp-date-picker show-time valueFormat="YYYY-MM-DD HH:mm:ss" v-model="val" hide-trigger style="width: 200px" placeholder="请选择"> </bp-date-picker>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref("");
</script>
