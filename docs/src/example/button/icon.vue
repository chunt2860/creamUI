<template>
  <bp-button :icon="IconSearch2Line" type="normal" status="primary">搜索</bp-button>
  <bp-button :icon="IconDeleteBin6Line" type="plain" status="danger">确认删除</bp-button>
  <bp-button :icon="IconShareFill" type="plain" status="primary"></bp-button>
  <bp-button :icon="IconUploadCloud2Line" type="text" status="primary">上传</bp-button>
</template>

<script setup lang="ts">
import { IconShareFill, IconSearch2Line, IconDeleteBin6Line, IconUploadCloud2Line } from "birdpaper-icon";
</script>
