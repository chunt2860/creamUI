<template>
  <bp-checkbox-group v-model="val" direction="horizontal">
    <bp-checkbox v-for="v in options" :value="v">{{ v }}</bp-checkbox>
  </bp-checkbox-group>

  <bp-checkbox-group v-model="val" direction="vertical" style="margin-top: 40px;">
    <bp-checkbox v-for="v in options" :value="v">{{ v }}</bp-checkbox>
  </bp-checkbox-group>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref([]);
const options = ["选项一", "选项二", "选项三", "选项四"];
</script>
