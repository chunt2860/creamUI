<template>
  <bp-input :class="clsBlockName">
    <bp-tag closeable>标签</bp-tag>
  </bp-input>
</template>

<script setup lang="ts">
import bpTag from "@birdpaper-ui/components/tag";
import bpInput from "@birdpaper-ui/components/input";
import { useNamespace } from "@birdpaper-ui/hooks";

defineOptions({ name: "InputTag" });
const { clsBlockName } = useNamespace("input-tag");
const model = defineModel({ default: [] });
</script>
