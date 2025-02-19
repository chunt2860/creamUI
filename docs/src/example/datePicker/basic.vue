<template>
  <!-- <bp-date-picker v-model="val" style="width: 200px" placeholder="请选择" /> -->
  <bp-range-picker v-model="val" style="width: 200px" :placeholder="['开始时间', '结束时间']" />
  <div class="mt-20px">{{ val }}</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const val = ref([]);
// const val = ref(["2025-02-05", "2025-03-18"]);
</script>
