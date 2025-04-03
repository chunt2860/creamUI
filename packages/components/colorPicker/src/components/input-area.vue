<template>
  <div class="input-area">
    <bp-space size="mini" class="input-area-value">
      <bp-select v-model="valueType" size="mini" style="width: 52px">
        <bp-option v-for="v in valueTypeList" :value="v">{{ v.toLocaleUpperCase() }}</bp-option>
      </bp-select>
      <bp-input v-model="value" size="mini" style="width: 112px">
        <template #prefix>
          <span v-if="valueType === 'hex'">#</span>
        </template>
      </bp-input>
      <bp-input-number unit="%" size="mini" style="width: 52px" v-model="alphaValue"></bp-input-number>
    </bp-space>
    <bp-space size="mini" class="input-area-value">
      <bp-input size="mini" />
      <bp-input size="mini" />
      <bp-input size="mini" />
      <bp-input size="mini" v-model="alpha" />
    </bp-space>
    <bp-space size="mini" class="input-area-label">
      <template v-if="valueType === 'hsl'">
        <span class="input-area-label-inner" v-for="v in 'HSL'">{{ v }}</span>
      </template>
      <template v-else>
        <span class="input-area-label-inner" v-for="v in 'RGB'">{{ v }}</span>
      </template>
      <span class="input-area-label-inner">A</span>
    </bp-space>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import BpSpace from "@birdpaper-ui/components/space/index";
import BpSelect from "@birdpaper-ui/components/select/index";
import BpInput from "@birdpaper-ui/components/input/index";
import BpInputNumber from "@birdpaper-ui/components/inputNumber/index";
import BpOption from "@birdpaper-ui/components/select/src/components/option.vue";
import { ColorPickerValueType } from "../types";

const alpha = defineModel<number>("alpha", { default: 1 });
const alphaValue = ref<number>(Math.floor(alpha.value * 100));
const props = defineProps({
  color: {
    type: String,
    default: "",
  },
});

const valueTypeList: ColorPickerValueType[] = ["hex", "rgb", "hsl"];
const valueType = ref<ColorPickerValueType>("hex");

const value = ref<string>("4695ed");

watch(
  () => alpha.value,
  (val) => {
    alphaValue.value = Math.floor(val * 100);
  }
);
</script>
