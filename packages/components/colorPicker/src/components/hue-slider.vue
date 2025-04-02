<template>
  <div ref="sliderRef" class="hue-slider" @mousedown="startDrag">
    <div class="hue-pointer" :style="{ left: pointerX + 'px', background: pointColor }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getSliderPosition } from "../useColor";
import { useEventListener } from "@vueuse/core";

const model = defineModel<number>({ default: 0 });
const props = defineProps({
  pointColor: {
    type: String,
    default: "#17171a",
  },
});

const sliderRef = ref();
const pointerX = ref(-9);

const startDrag = (e: MouseEvent) => {
  updatePosition(e);
  useEventListener(window, "mousemove", onMouseMove);
};

const updatePosition = (ev: MouseEvent) => {
  const { x, v } = getSliderPosition(ev, sliderRef.value, 9);
  pointerX.value = x;
  model.value = v * 360;
};

const removeListener = () => {
  window.removeEventListener("mousemove", onMouseMove);
};

const onMouseMove = (ev: MouseEvent) => {
  ev.preventDefault();
  ev.buttons > 0 ? updatePosition(ev) : removeListener();
};
</script>
