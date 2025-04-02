<template>
  <bp-trigger hide-trigger>
    <template #content>
      <div :class="clsBlockName">
        <color-picker :hue v-model:saturation="saturation" v-model:lightness="lightness" />

        <div class="option-area">
          <div class="slider">
            <hue-slider v-model="hue" :point-color="currentColor" />
            <alpha-slider v-model="alpha" :point-color="currentColor" />
          </div>
          <div class="preview-box">
            <div class="preview" :style="`background: ${model}`"></div>
          </div>
        </div>
      </div>
    </template>
  </bp-trigger>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import BpTrigger from "@birdpaper-ui/components/trigger/index";
import { colorPickerProps, ColorPickerProps } from "./props";
import colorPicker from "./components/color-picker.vue";
import hueSlider from "./components/hue-slider.vue";
import alphaSlider from "./components/alpha-slider.vue";
import { ref, watch } from "vue";
import { hsvToRgb } from "./useColor";

defineOptions({ name: "ColorPicker" });
const { clsBlockName } = useNamespace("color-picker");

const model = defineModel<string>({ default: "" });
const props: ColorPickerProps = defineProps(colorPickerProps);

const saturation = ref(100);
const lightness = ref(50);
const alpha = ref(1);
const hue = ref(0);

const currentColor = ref<string>("");

const calculateColor = () => {
  const [r, g, b] = hsvToRgb(hue.value, saturation.value, lightness.value);
  currentColor.value = `rgb(${r}, ${g}, ${b})`;
  model.value = `rgba(${r}, ${g}, ${b}, ${alpha.value})`;
};

const h = watch(
  () => [saturation.value, lightness.value, alpha.value, hue.value],
  () => {
    calculateColor();
  },
  { immediate: true }
);
</script>
