<template>
  <div style="margin: 10px 0">
    <bp-date-picker v-model="val" hide-trigger style="width: 200px" placeholder="请选择"> </bp-date-picker>
  </div>
  <div style="margin: 10px 0">
    <bp-date-picker show-time valueFormat="YYYY-MM-DD HH:mm:ss" v-model="val" hide-trigger style="width: 200px" placeholder="请选择"> </bp-date-picker>
  </div>
  <div style="margin: 10px 0">
    <bp-year-picker hide-trigger v-model="val" style="width: 200px" placeholder="请选择"> </bp-year-picker>
  </div>
  <div style="margin: 10px 0">
    <bp-month-picker hide-trigger v-model="val" style="width: 200px" placeholder="请选择"> </bp-month-picker>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref("");
</script>
