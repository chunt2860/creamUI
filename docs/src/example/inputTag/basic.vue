<template>
  <bp-input-tag :max-tag-count="3" placeholder="Add a tag" v-model="val" style="width: 280px"></bp-input-tag>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const val = ref<string[]>(["tag1", "tag2"]);
</script>
