<template>
  <div class="alpha-slider-bg">
    <div
      ref="sliderRef"
      :style="`background: linear-gradient(to right, rgba(0, 0, 0, 0), ${pointColor});`"
      class="alpha-slider"
      @mousedown="startDrag"
    >
      <div class="alpha-pointer" :style="{ left: pointerX + 'px', background: pointColor }"></div>
    </div>
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
const pointerX = ref(163);

const startDrag = (e: MouseEvent) => {
  updatePosition(e);
  useEventListener(window, "mousemove", onMouseMove1);
};

const updatePosition = (ev: MouseEvent) => {
  const { x, v } = getSliderPosition(ev, sliderRef.value, 9);
  pointerX.value = x;
  model.value = v;
};

const removeListener = () => {
  window.removeEventListener("mousemove", onMouseMove1);
};

const onMouseMove1 = (ev: MouseEvent) => {
  ev.preventDefault();
  ev.buttons > 0 ? updatePosition(ev) : removeListener();
};
</script>
