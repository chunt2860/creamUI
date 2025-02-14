<template>
  <bp-trigger
    v-model="showPopup"
    transition="fade-dropdown"
    hide-trigger
    :popup-offset="10"
    position="bottom-left"
    update-at-scroll
  >
    <div :class="`${clsBlockName}-inner`">
      <input placeholder="开始时间" />
      <div class="split">-</div>
      <input placeholder="结束时间" />
      <div :class="`${clsBlockName}-suffix`">
        <IconCalendarLine />
      </div>
    </div>
    <template #content>
      <picker-panel type="range" />
    </template>
  </bp-trigger>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import BpTrigger from "@birdpaper-ui/components/trigger/index";
import pickerPanel from "./components/picker-panel.vue";
import { ref, provide } from "vue";
import { rangeInjectionKey } from "./types";

defineOptions({ name: "RangePicker" });
const { clsBlockName } = useNamespace("range-picker");

const model = defineModel<string[]>({ default: [] });

const showPopup = ref<boolean>(false);
provide(rangeInjectionKey, {
  type: "range",
  model: model as unknown as string[],
  langs: "zh-cn",
  valueFormat: "YYYY-MM-DD",
  onSelect: (v: string) => {
    // model.value = v;
    showPopup.value = false;
  },
});
</script>
