<template>
  <div :class="cls">
    <div :class="`${clsBlockName}-spinner`" v-if="!slots.default?.()">
      <component :is="spinIcon" class="spin-icon" size="14"></component>
      <span v-if="description" :class="`${clsBlockName}-text`">{{ description }}</span>
    </div>
    <div :class="`${clsBlockName}-mask`" v-else>
      <div :class="`${clsBlockName}-spinner`">
        <component :is="spinIcon" class="spin-icon" size="14"></component>
        <span v-if="description" :class="`${clsBlockName}-text`">{{ description }}</span>
      </div>
    </div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue';
import type { Component } from 'vue';
import { useNamespace } from '@birdpaper-ui/hooks';
import { IconLoaderLine, IconLoader2Line, IconLoader3Line, IconLoader4Line, IconLoader5Line } from "birdpaper-icon";
import { SpinProps, spinProps } from './props';

defineOptions({ name: "Spin" });
const { clsBlockName } = useNamespace("spin");
const cls = computed(() => [clsBlockName, `${clsBlockName}-${props.size}`, `${clsBlockName}-spinning`]);

const props: SpinProps = defineProps(spinProps);
const slots = useSlots();

const spinIcons = [IconLoaderLine, IconLoader2Line, IconLoader3Line, IconLoader4Line, IconLoader5Line];
const spinIcon = computed<Component>(() => {
  if (typeof props.spinIcon === "number") return spinIcons[props.spinIcon - 1];
  return props.spinIcon;
});
</script>
