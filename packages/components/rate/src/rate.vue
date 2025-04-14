<template>
  <div :class="cls">
    <template v-for="index in props.count" :key="`rate-${index}`">
      <rate-item :current :index @mousemove="onMousemove" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useNamespace } from "@birdpaper-ui/hooks";
import { RateProps, rateProps } from "./props";
import rateItem from "./components/rate-item.vue";

defineOptions({ name: "Rate" });
const { clsBlockName } = useNamespace("rate");

const props: RateProps = defineProps(rateProps);

const cls = computed(() => {
  return [clsBlockName];
});

const current = ref(0);
const onMousemove = (index: number, isHalf: boolean) => {
  current.value = index + (isHalf ? 0.5 : 0);
};
</script>
