<template>
  <li :class="[`${clsBlockName}`, extraClass]">
    <span class="page-text" v-text="text"></span>
  </li>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useNamespace } from "@birdpaper-ui/hooks";

const props = defineProps({
  /**
   * @type Number
   * @description: The total number of items.
   * @default 0
   */
  value: { type: Number, default: 0 },
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
const { clsBlockName } = useNamespace("pagination-total");

const paramsStr = "{total}";
const text = ref<string>("");

watchEffect(() => {
  text.value = props.tmpString.replace(paramsStr, props.value as unknown as string);
});
</script>
