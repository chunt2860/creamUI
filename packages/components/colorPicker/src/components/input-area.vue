<template>
  <div class="input-area">
    <bp-space size="mini">
      <bp-select v-model="valueType" size="mini" style="width: 60px">
        <bp-option value="Hex">Hex</bp-option>
        <bp-option value="RGB">RGB</bp-option>
      </bp-select>
      <div class="input-area-value">
        <bp-space size="mini">
          <bp-input v-model="value" style="width: 100px" size="mini">
            <template #prefix>
              <span v-if="valueType === 'Hex'">#</span>
            </template>
          </bp-input>
          <bp-input-number style="width: 52px" unit="%" size="mini" v-model="alphaValue"></bp-input-number>
        </bp-space>
      </div>
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

const valueType = ref<"Hex" | "RGB">("Hex");
const value = ref<string>("4695ed");
const alpha = defineModel<number>("alpha", { default: 1 });
const alphaValue = ref<number>(Math.floor(alpha.value * 100));

watch(
  () => alpha.value,
  (val) => {
    alphaValue.value = Math.floor(val * 100);
  }
);
</script>
