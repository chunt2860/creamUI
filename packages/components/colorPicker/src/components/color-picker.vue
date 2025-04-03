<template>
  <div ref="pickBlock" class="color-picker-panel" @mousedown="startPicking">
    <div class="color-picker-overlay" :style="{ backgroundColor: `hsl(${hue}, 100%, 50%)` }"></div>
    <div class="color-picker-pointer" :style="{ left: pointerX + 'px', top: pointerY + 'px' }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useEventListener } from "@vueuse/core";
import { getPickerPosition } from "../useColor";

const saturation = defineModel<number>("saturation", { default: 100 });
const value = defineModel<number>("value", { default: 50 });
const props = defineProps({
  hue: {
    type: Number,
    default: 0,
  },
});

const pickBlock = ref();
const pointerX = ref(0);
const pointerY = ref(0);

const updatePosition = (ev: MouseEvent) => {
  const { x, y, s, v } = getPickerPosition(ev, pickBlock.value, 7);

  pointerX.value = x;
  pointerY.value = y;
  saturation.value = s;
  value.value = v * 100;
};

const startPicking = (e: MouseEvent) => {
  updatePosition(e);
  useEventListener(window, "mousemove", onMouseMove);
};

const removeListener = () => {
  window.removeEventListener("mousemove", onMouseMove);
};

const onMouseMove = (ev: MouseEvent) => {
  ev.preventDefault();
  ev.buttons > 0 ? updatePosition(ev) : removeListener();
};

const setPosition = (s: number, v: number) => {
  if (!pickBlock.value) return;

  const rect = pickBlock.value.getBoundingClientRect();
  const left = (s / 100) * rect.width - 7;
  const top = (100 - v) * rect.height - 7;
  pointerX.value = left;
  pointerY.value = top;
};

defineExpose({
  setPosition,
});
</script>
