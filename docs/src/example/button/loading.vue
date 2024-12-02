<template>
  <bp-button :loading type="plain" status="primary">{{ loading ? "保存中" : "保存" }}</bp-button>
  <bp-button :loading :icon="IconUploadCloudLine" type="plain" shape="circle" status="primary"></bp-button>
  <bp-button type="text" status="primary" @click="onChange">切换</bp-button>
</template>

<script lang="ts" setup>
import { IconUploadCloudLine } from "birdpaper-icon";
import { ref } from "vue";

const loading = ref(false);
const onChange = () => {
  loading.value = !loading.value;
};
</script>
