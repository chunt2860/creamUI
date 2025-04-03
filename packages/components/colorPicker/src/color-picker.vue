<template>
  <bp-trigger hide-trigger position="bottom-left" :popup-offset="10">
    <div :class="`${clsBlockName}-trigger`">
      <div :class="`${clsBlockName}-trigger-inner`"></div>
    </div>
    <template #content>
      <div :class="clsBlockName">
        <color-picker ref="colorPickerRef" :hue v-model:saturation="saturation" v-model:value="_value" />

        <div class="option-area">
          <div class="slider">
            <hue-slider ref="hueSliderRef" v-model="hue" :point-color="currentColor" />
            <alpha-slider ref="alphaSliderRef" v-model="alpha" :point-color="currentColor" />
          </div>
          <div class="preview-box">
            <div class="preview" :style="`background: ${currentColor}; opacity:${alpha}`"></div>
          </div>
        </div>

        <input-area v-model:alpha="alpha" :color="currentColor" />
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
import { computed, nextTick, onMounted, ref, watch } from "vue";
import { hexToHsla, hslaToHsv, hsvToHsla } from "./useColor";

defineOptions({ name: "ColorPicker" });
const { clsBlockName } = useNamespace("color-picker");

const model = defineModel<string>({ default: "#165dff" });
const props: ColorPickerProps = defineProps(colorPickerProps);

const colorPickerRef = ref();
const hueSliderRef = ref();
const alphaSliderRef = ref();
// 色相（范围：0 到 360）
const hue = ref(0);
// 饱和度（范围：0 到 100）
const saturation = ref(0);
// 亮度（范围：0 到 100）
const lightness = ref(0);
// 明度
const _value = ref(0);
// 透明度（范围：0 到 1）
const alpha = ref(1);
const _typeToHslaFun = {
  hex: hexToHsla,
};

const init = () => {
  const { h, s, l, a } = props.valueType && _typeToHslaFun[props.valueType](model.value);
  hue.value = h;
  saturation.value = s;
  lightness.value = l;
  alpha.value = a;

  const { v } = hslaToHsv(hue.value, saturation.value, lightness.value, alpha.value);
  _value.value = v;
  console.log("_value: ", _value);

  colorPickerRef.value.setPosition(s, v);
  hueSliderRef.value.setPosition(h);
  alphaSliderRef.value.setPosition(a);
};

onMounted(() => {
  nextTick(() => {
    init();
  });
});

const currentColor = computed(() => {
  return `hsl(${hue.value}, ${saturation.value}%, ${lightness.value}%)`;
});
const calculateColor = () => {
  const { l } = hsvToHsla(hue.value, saturation.value, _value.value, alpha.value);
  lightness.value = l;
};

watch(
  () => [saturation.value, hue.value, _value.value],
  () => {
    calculateColor();
  },
  { immediate: true }
);
</script>
