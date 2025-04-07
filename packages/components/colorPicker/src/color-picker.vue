<template>
  <bp-trigger hide-trigger position="bottom-left" :popup-offset="10">
    <div :class="`${clsBlockName}-trigger`">
      <div :class="`${clsBlockName}-trigger-inner`"></div>
    </div>
    <template #content>
      <div :class="clsBlockName">
        <color-picker ref="colorPickerRef" :hue v-model:saturation="sv.s" v-model:value="sv.v" />

        <div class="option-area">
          <div class="slider">
            <hue-slider ref="hueSliderRef" v-model="hue" :point-color="currentColor" />
            <alpha-slider ref="alphaSliderRef" v-model="alpha" :point-color="currentColor" />
          </div>
          <div class="preview-box">
            <div class="preview" :style="`background: ${currentColor}; opacity:${alpha}`"></div>
          </div>
        </div>
        <input-area
          v-model:alpha="alpha"
          :type="valueType"
          :color="currentColor"
          :hue
          :sv
          :sl
          @update-by-hex="updateByHex"
          @update-by-rgb="updateByRgb"
        />
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
import { hexToHsla, hslaToHex, hslaToHsv, hslToRgb, hsvToHsla, rgbToHsla } from "./useColor";

defineOptions({ name: "ColorPicker" });
const { clsBlockName } = useNamespace("color-picker");

const model = defineModel<string>({ default: "#165dff" });
const props: ColorPickerProps = defineProps(colorPickerProps);

const colorPickerRef = ref();
const hueSliderRef = ref();
const alphaSliderRef = ref();

// 色相（范围：0 到 360）
const hue = ref(0);
const sv = ref({ s: 0, v: 0 });
const sl = ref({ s: 0, l: 0 });

// 透明度（范围：0 到 1）
const alpha = ref(1);

const _typeToHslaFun = {
  hex: hexToHsla,
  rgb: rgbToHsla,
};

const currentColor = computed(() => `hsl(${hue.value}, ${sl.value.s}%, ${sl.value.l}%)`);

const init = (type = props.valueType || "hex", value = model.value) => {
  const { h, s, l, a } = type && _typeToHslaFun[type](value);
  sl.value = { s, l };
  hue.value = h;
  alpha.value = a;

  const { s: _s, v } = hslaToHsv(hue.value, sl.value.s, sl.value.l);
  sv.value = { s: _s, v };

  colorPickerRef.value.setPosition(sv.value.s, sv.value.v);
  hueSliderRef.value.setPosition(hue.value);
  alphaSliderRef.value.setPosition(alpha.value);
};

onMounted(() => {
  nextTick(() => {
    init();
  });
});

const calculateColor = () => {
  const { s, l } = hsvToHsla(hue.value, sv.value.s, sv.value.v, alpha.value);
  sl.value = { s, l };

  if (props.valueType === "hex") {
    model.value = "#" + hslaToHex(`hsla(${hue.value}, ${s}%, ${l}%, ${alpha.value})`);
  } else {
    const [r, g, b] = hslToRgb(hue.value, s, l);
    model.value = `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${alpha.value})`;
  }
};

const updateByHex = (val: string) => {
  init("hex", `#${val}`);
  model.value = `#${val}`;
};

const updateByRgb = (rgb: { r: number; g: number; b: number }) => {
  init("rgb", `rgb(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha.value})`);
  model.value = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha.value})`;
};

watch(
  () => alpha.value,
  () => {
    alphaSliderRef.value.setPosition(alpha.value);
  }
);

watch(
  () => [sv.value, hue.value, alpha.value],
  () => {
    calculateColor();
  },
  { deep: true }
);
</script>
