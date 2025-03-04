<template>
  <bp-input-tag :max-tag-count="3" v-model="val" style="width: 280px"></bp-input-tag>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const val = ref<string[]>(["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "tag8", "tag9", "tag10"]);
</script>
