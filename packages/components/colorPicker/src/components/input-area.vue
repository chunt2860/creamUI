<template>
  <div class="input-area">
    <bp-space size="mini" class="input-area-value">
      <bp-select v-model="valueType" size="mini" style="width: 52px">
        <bp-option v-for="v in valueTypeList" :value="v">{{ v.toLocaleUpperCase() }}</bp-option>
      </bp-select>
      <bp-input v-model="inpValue" size="mini" style="width: 112px">
        <template #prefix>
          <span v-if="valueType === 'hex'">#</span>
        </template>
      </bp-input>
      <bp-input-number unit="%" size="mini" style="width: 52px" v-model="alphaValue"></bp-input-number>
    </bp-space>
  </div>
</template>

<script setup lang="ts">
import { PropType, ref, watch } from "vue";
import BpSpace from "@birdpaper-ui/components/space/index";
import BpSelect from "@birdpaper-ui/components/select/index";
import BpInput from "@birdpaper-ui/components/input/index";
import BpInputNumber from "@birdpaper-ui/components/inputNumber/index";
import BpOption from "@birdpaper-ui/components/select/src/components/option.vue";
import { ColorPickerValueType } from "../types";
import { hslaToHex, hslToRgb } from "../useColor";

const alpha = defineModel<number>("alpha", { default: 1 });
const alphaValue = ref<number>(Math.floor(alpha.value * 100));

const props = defineProps({
  type: {
    type: String as PropType<ColorPickerValueType>,
    default: "hex",
  },
  color: {
    type: String,
    default: "",
  },
  hue: {
    type: Number,
    default: 0,
  },
  alpha: {
    type: Number,
    default: 1,
  },
  sv: {
    type: Object,
    default: () => ({ s: 0, v: 0 }),
  },
  sl: {
    type: Object,
    default: () => ({ s: 0, l: 0 }),
  },
});

const valueTypeList: ColorPickerValueType[] = ["hex", "rgb"];
const valueType = ref<ColorPickerValueType>(props.type || "hex");
const rgb = ref({ r: 0, g: 0, b: 0 });

const inpValue = ref<string>("");

watch(
  () => alpha.value,
  (val) => {
    alphaValue.value = Math.floor(val * 100);
  }
);

watch(
  () => [props.hue, props.sv, props.sl, props.alpha, valueType.value],
  () => {
    if (valueType.value === "hex") {
      inpValue.value = hslaToHex(
        props.alpha === 1
          ? `hsl(${props.hue}, ${props.sl.s}%, ${props.sl.l}%)`
          : `hsla(${props.hue}, ${props.sl.s}%, ${props.sl.l}%, ${props.alpha})`
      );
      return;
    }
    if (valueType.value === "rgb") {
      const [r, g, b] = hslToRgb(props.hue, props.sl.s, props.sl.l);
      rgb.value = { r: Math.round(r), g: Math.round(g), b: Math.round(b) };
      inpValue.value = `rgb(${rgb.value.r}, ${rgb.value.g}, ${rgb.value.b})`;
    }
  },
  { immediate: true, deep: true }
);
</script>
