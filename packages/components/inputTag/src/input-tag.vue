<template>
  <bp-input :class="clsBlockName">
    <div :class="`${clsBlockName}-content`">
      <bp-tag v-for="(v, k) in model" closeable @close="handleClose(k)">{{ v.toString() }}</bp-tag>

      <input
        type="text"
        v-model="inpVal"
        :class="`${clsBlockName}-content-inner`"
        :style="{ width: `${inpVal.length * 14 + 8}px` }"
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
