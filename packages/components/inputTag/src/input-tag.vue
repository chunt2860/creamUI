<template>
  <bp-input :class="clsBlockName" @click.stop="inpRef?.focus()">
    <div :class="`${clsBlockName}-content`">
      <template v-for="(v, k) in model">
        <bp-tag v-if="maxTagCount === 0 || k < maxTagCount" :closeable="!disabled" @close="handleClose(k)">
          {{ v.toString() }}
        </bp-tag>
      </template>
      <bp-tag v-if="maxTagCount && model.length > maxTagCount">+{{ model.length - maxTagCount }}...</bp-tag>

      <input
        ref="inpRef"
        type="text"
        v-model="inpVal"
        :class="`${clsBlockName}-content-inner`"
        :style="{ width: `${inpVal.length || placeholder.length * 14 + 8}px` }"
        :name
        :placeholder
        :disabled
        @keyup.enter="handleEnter"
        @keyup.backspace="handleBackspace"
      />
    </div>
  </bp-input>
</template>

<script setup lang="ts">
import bpTag from "@birdpaper-ui/components/tag";
import bpInput from "@birdpaper-ui/components/input";
import { useNamespace } from "@birdpaper-ui/hooks";
import { ref } from "vue";
import { InputTagProps, inputTagProps } from "./props";

defineOptions({ name: "InputTag" });
const { clsBlockName } = useNamespace("input-tag");

const model = defineModel<string[]>({ default: [] });
const props: InputTagProps = defineProps(inputTagProps);

const inpVal = ref<string>("");
const inpRef = ref<HTMLInputElement | null>(null);

const handleEnter = () => {
  if (!inpVal.value) return;

  model.value.push(inpVal.value);
  inpVal.value = "";
};
const handleBackspace = () => {
  if (inpVal.value) return;

  model.value.pop();
};

const handleClose = (index: number) => {
  model.value.splice(index, 1);
};
</script>
