<template>
  <bp-trigger
    v-model="showPopup"
    transition="fade-dropdown"
    :hideTrigger
    :disabled
    :popup-offset="10"
    position="bottom-left"
    update-at-scroll
  >
    <bp-input
      ref="inpRef"
      readonly
      v-model="model"
      :class="cls"
      :placeholder
      :disabled
      :clearable
      :size
      @input="onInput"
      @blur="onBlur"
    >
      <template #suffix>
        <IconCalendarLine />
      </template>
    </bp-input>
    <template #content>
      <picker-panel />
    </template>
  </bp-trigger>
</template>

<script lang="ts" setup>
import { useNamespace } from "@birdpaper-ui/hooks";
import BpInput from "@birdpaper-ui/components/input/index";
import BpTrigger from "@birdpaper-ui/components/trigger/index";
import { computed, provide, ref } from "vue";
import { datePickerProps, DatePickerProps } from "./props";
import { IconCalendarLine } from "birdpaper-icon";
import pickerPanel from "./component/pickerPanel.vue";
import { dateInjectionKey } from "./types";

defineOptions({ name: "DatePicker" });
const { clsBlockName } = useNamespace("date-picker");

const model = defineModel<string>({ default: "" });
const props: DatePickerProps = defineProps(datePickerProps);
const emits = defineEmits(["input", "blur"]);

const cls = computed<string[] | {}[]>(() => [clsBlockName, `${clsBlockName}-${props.size}`]);

const showPopup = ref<boolean>(false);
provide(dateInjectionKey, {
  model: model as unknown as string,
  langs: props.langs,
  valueFormat: props.valueFormat,
  showTime: props.showTime,
  onSelect: (v: string, payload: any, closePopup = true) => {
    model.value = v;

    if (closePopup) showPopup.value = false;
  },
});

const onInput = () => emits("input");
const onBlur = () => emits("blur");
</script>
