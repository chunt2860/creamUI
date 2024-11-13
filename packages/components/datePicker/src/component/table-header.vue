<template>
  <div :class="`${clsBlockName}`">
    <div :class="[`${clsBlockName}-inner`, { 'allow-click': innerAllowClick }]">
      <slot name="inner" />
    </div>
    <div :class="`${clsBlockName}-option`">
      <slot name="option" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from "@birdpaper-ui/hooks";

defineOptions({ name: "PickerTableHeader" });
const { clsBlockName } = useNamespace("picker-table-header");

const props = defineProps({
  innerAllowClick: { type: Boolean, default: true },
});
</script>
