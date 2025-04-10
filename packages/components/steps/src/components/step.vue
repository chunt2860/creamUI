<template>
  <div :class="cls">
    <div :class="`${clsBlockName}-node`">
      <IconCheckFill v-if="status === 'finish'" size="16" />

      <template v-else> {{ index + 1 }} </template>
    </div>
    <div :class="`${clsBlockName}-title`">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { stepProps, StepProps } from "../props";
import { computed } from "vue";
import { IconCheckFill } from "birdpaper-icon";

defineOptions({ name: "Step" });
const { clsBlockName } = useNamespace("step");

const props: StepProps = defineProps(stepProps);

const cls = computed(() => {
  return [clsBlockName, `${clsBlockName}-${props.status}`];
});
</script>
