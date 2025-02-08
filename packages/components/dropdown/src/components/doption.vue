<template>
  <li :class="clsBlockName" @click="handleClick">
    <span :class="`${clsBlockName}-inner`">
      <slot />
    </span>
  </li>
</template>

<script lang="ts" setup>
import { useNamespace } from "@birdpaper-ui/hooks";
import { DropdownContext, dropdownInjectionKey } from "../types";
import { inject, ref } from "vue";
import { DoptionProps, doptionProps } from "../props";

defineOptions({ name: "Doption" });
const { clsBlockName } = useNamespace("doption");

const ctx = ref<DropdownContext>();
const props: DoptionProps = defineProps(doptionProps);

const init = () => {
  ctx.value = inject(dropdownInjectionKey, undefined);
};
init();

const handleClick = () => {
  ctx.value?.onSelect(props.value);
};
</script>
