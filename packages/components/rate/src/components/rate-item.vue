<template>
  <div :class="cls" @mouseenter="onMouse" @mousemove="onMouse">
    <div class="rate-left">
      <IconStarFill size="22" />
    </div>
    <div class="rate-right">
      <IconStarFill size="22" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconStarFill } from "birdpaper-icon";
import { useNamespace } from "@birdpaper-ui/hooks";
import { computed, ref } from "vue";

const props = defineProps({
  current: {
    type: Number,
    default: 0,
  },
  index: {
    type: Number,
    required: true,
  },
});
const emits = defineEmits<{
  (e: "mousemove", index: number, isHalf: boolean): void;
}>();

const { clsBlockName } = useNamespace("rate-item");
const cls = computed(() => {
  return [clsBlockName, val.value > 0 ? (val.value === 1 ? "full-active" : "half-active") : ""];
});

const isHalf = ref(false);
const val = computed(() => {
  return props.current >= props.index ? (props.current - props.index === 0.5 ? 0.5 : 1) : 0;
});

const onMouse = (e: MouseEvent) => {
  isHalf.value = e.offsetX < 22 / 2;

  emits("mousemove", props.index, isHalf.value);
};
</script>
