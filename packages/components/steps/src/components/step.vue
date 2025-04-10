<template>
  <div :class="clsBlockName">
    <div :class="`${clsBlockName}-node`">{{ index + 1 }}</div>
    <div :class="`${clsBlockName}-title`">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { stepProps, StepProps } from "../props";

defineOptions({ name: "Step" });
const { clsBlockName } = useNamespace("step");

const props: StepProps = defineProps(stepProps);
</script>
