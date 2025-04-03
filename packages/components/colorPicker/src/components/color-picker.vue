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
const lightness = defineModel<number>("lightness", { default: 50 });
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
  const { x, y, s, l } = getPickerPosition(ev, pickBlock.value, 7);

  pointerX.value = x;
  pointerY.value = y;
  saturation.value = s;
  lightness.value = l;
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
</script>
