<template>
  <div :class="cls">
    <div :class="`${clsBlockName}-inner`">
      <div :class="`${clsBlockName}-inner-title`">
        <component :is="icon" size="16"></component>
        {{ props.title }}
      </div>
    </div>

    <div :class="`${clsBlockName}-content`">
      <slot name="content" />
      <template v-if="!slots.content">
        {{ props.content }}
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { alertProps, AlertProps } from "./props";
import { IconInformationFill, IconCheckboxCircleFill, IconErrorWarningFill, IconCloseCircleFill } from "birdpaper-icon";
import { computed, useSlots } from "vue";

defineOptions({ name: "Alert" });
const { clsBlockName } = useNamespace("alert");

const props: AlertProps = defineProps(alertProps);
const slots = useSlots();

const cls = computed(() => [
  clsBlockName,
  `${clsBlockName}-${props.status}`,
  { [`${clsBlockName}-no-border`]: props.noBorder },
]);

const statusIcon = {
  info: IconInformationFill,
  success: IconCheckboxCircleFill,
  warning: IconErrorWarningFill,
  danger: IconCloseCircleFill,
};
const icon = computed(() => {
  if (props.icon) return props.icon;
  return statusIcon[props.status];
});
</script>
