<template>
  <div :class="cls" @mouseleave="onMouseleave">
    <template v-for="(item, index) in props.count" :key="`rate-${index}`">
      <rate-item :current :index @mousemove="onMousemove" @select="onSelect" />
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

const model = defineModel({ default: 0 });
const props: RateProps = defineProps(rateProps);

const cls = computed(() => {
  return [clsBlockName];
});

const current = ref(model.value || 0);
const onMousemove = (index: number, isHalf: boolean) => {
  current.value = index + (isHalf ? 0.5 : 1);
};

const onSelect = (index: number, isHalf: boolean) => {
  model.value = index + (isHalf ? 0.5 : 1);
};

const onMouseleave = () => {
  current.value = model.value;
};
</script>
