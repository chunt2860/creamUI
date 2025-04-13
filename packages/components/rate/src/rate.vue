<template>
  <div :class="cls"></div>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { computed } from "vue";
import { RateProps, rateProps } from "./props";

defineOptions({ name: "Rate" });
const { clsBlockName } = useNamespace("rate");

const props: RateProps = defineProps(rateProps);

const cls = computed(() => {
  return [clsBlockName];
});
</script>
