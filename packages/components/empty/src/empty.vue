<template>
  <div :class="`${clsBlockName}`">
    <div :class="`${clsBlockName}-image`">
      <div v-if="!slots.image?.()">
        <IconInbox2Line size="28" />
      </div>
      <slot name="image" />
    </div>
    
    <div :class="`${clsBlockName}-content`">
      {{ content }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { emptyProps, EmptyProps } from "./props";
import { useSlots } from "vue";
import { IconInbox2Line } from "birdpaper-icon";

defineOptions({ name: "Empty" });
const { clsBlockName } = useNamespace("empty");

const props: EmptyProps = defineProps(emptyProps);
const slots = useSlots();
</script>
