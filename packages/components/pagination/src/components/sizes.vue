<template>
  <li :class="`${clsBlockName}-sizes ${extraClass}`">
    <bp-select v-model="val" style="width: 100px" @change="onChange">
      <bp-option v-for="v in list" :value="v.value">{{ v.label }}</bp-option>
    </bp-select>
  </li>
</template>

<script setup lang="ts">
import BpSelect from "@birdpaper-ui/components/select/index";
import BpOption from "@birdpaper-ui/components/select/src/components/option.vue";
import { PropType, ref, watchEffect } from "vue";
import { useNamespace } from "@birdpaper-ui/hooks";

const { clsBlockName } = useNamespace("pagination-sizes");

const props = defineProps({
  /**
   * @type Number
   * @description: The current size.
   * @default 10
   */
  currentSize: { type: Number, default: "" },
  /**
   * @type Array
   * @description: The sizes list.
   * @default []
   */
  sizesList: { type: Array as PropType<number[]>, default: () => [] },
  /**
   * @type String
   * @description: The template string.
   * @default ""
   */
  tmpString: { type: String, default: "" },
  /**
   * @type String
   * @description: The extra class name.
   * @default ""
   */
  extraClass: { type: String, default: "" },
});

const emits = defineEmits<{
  (e: "change", size: number): void;
}>();

const val = ref(props.currentSize || props.sizesList[0] || 10);
const paramsStr = "{value}";
const list = ref<{ label: string; value: number }[]>([]);

const onChange = (v: number) => {
  emits("change", v);
};

watchEffect(() => {
  for (let i = 0; i < props.sizesList.length; i++) {
    const value = props.sizesList[i];
    const label = `${props.tmpString.replace(paramsStr, value.toString())}`;
    list.value.push({ label, value });
  }
});
</script>
