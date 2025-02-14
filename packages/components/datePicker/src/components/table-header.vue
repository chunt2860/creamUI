<template>
  <div :class="`${clsBlockName}`" :style="{ flexDirection: reverse ? 'row-reverse' : 'row' }">
    <div :class="[`${clsBlockName}-inner`, { 'allow-click': innerAllowClick }]">
      <slot name="inner" />
    </div>
    <div :class="`${clsBlockName}-option`">
      <slot name="option" :optionList />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from "@birdpaper-ui/hooks";
import {
  IconArrowLeftSLine,
  IconArrowRightSLine,
  IconArrowLeftDoubleFill,
  IconArrowRightDoubleFill,
} from "birdpaper-icon";
import type { Component } from "vue";

defineOptions({ name: "PickerTableHeader" });
const { clsBlockName } = useNamespace("picker-table-header");

const props = defineProps({
  innerAllowClick: { type: Boolean, default: true },
  reverse: { type: Boolean, default: false },
});

const optionList: { icon: Component; step: "year" | "month"; type: "prev" | "next" }[] = [
  { icon: IconArrowLeftDoubleFill, step: "year", type: "prev" },
  { icon: IconArrowLeftSLine, step: "month", type: "prev" },
  { icon: IconArrowRightSLine, step: "month", type: "next" },
  { icon: IconArrowRightDoubleFill, step: "year", type: "next" },
];
</script>
