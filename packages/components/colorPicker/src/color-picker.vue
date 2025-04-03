<template>
  <bp-trigger hide-trigger position="bottom-left" :popup-offset="10">
    <div :class="`${clsBlockName}-trigger`">
      <div :class="`${clsBlockName}-trigger-inner`"></div>
    </div>
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

        <input-area v-model:alpha="alpha" />
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
import inputArea from "./components/input-area.vue";
import { ref, watch } from "vue";
import { hsvToRgb } from "./useColor";

defineOptions({ name: "ColorPicker" });
const { clsBlockName } = useNamespace("color-picker");

const model = defineModel<string>({ default: "" });
const props: ColorPickerProps = defineProps(colorPickerProps);

// 色相（范围：0 到 360）
const hue = ref(0);
// 饱和度（范围：0 到 100）
const saturation = ref(100);
// 亮度（范围：0 到 100）
const lightness = ref(50);
// 透明度（范围：0 到 1）
const alpha = ref(1);

const currentColor = ref<string>("");

const calculateColor = () => {
  const [r, g, b] = hsvToRgb(hue.value, saturation.value, lightness.value);
  currentColor.value = `rgb(${r}, ${g}, ${b})`;
  model.value = `rgba(${r}, ${g}, ${b}, ${alpha.value})`;
};

watch(
  () => [saturation.value, lightness.value, alpha.value, hue.value],
  () => {
    calculateColor();
  },
  { immediate: true }
);
</script>
