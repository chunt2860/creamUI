<template>
  <div :class="clsBlockName">
    <div :class="`${clsBlockName}-body`">
      <template v-for="(items, index) in [hourList, minuteList, secondList]">
        <RecycleScroller
          listClass="time-col-scroller-list"
          listTag="ul"
          :ref="(el) => (typeRefs[index] = el)"
          :class="`${clsBlockName}-time-col`"
          :items="items"
          :item-size="32"
          @visible="onVisible(index)"
          v-slot="{ item }"
        >
          <li
            :class="[`${clsBlockName}-col-cell`, { active: item === globalValue[index] }]"
            @click="handleClick(index, item)"
          >
            <span :class="`${clsBlockName}-col-cell-inner`">{{ item }}</span>
          </li>
        </RecycleScroller>
      </template>
    </div>
    <div :class="`${clsBlockName}-footer`">
      <bp-button size="mini" @click="setNow">现在</bp-button>
      <bp-button :disabled="confirmDisabled" size="mini" type="normal" status="primary" @click="handleSelect">
        确认
      </bp-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import BpButton from "@birdpaper-ui/components/button/index";
import { computed, inject, ref, watch } from "vue";
import type { Ref } from "vue";
import dayjs from "dayjs";
import { timeInjectionKey, TimePickerContext } from "../types";

// https://github.com/Akryum/vue-virtual-scroller/blob/master/packages/vue-virtual-scroller/README.md#vue-virtual-scroller
import { RecycleScroller } from "vue-virtual-scroller";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";

defineOptions({ name: "TimeTable" });
const { clsBlockName } = useNamespace("timeTable");
const ctx = ref<TimePickerContext>();

function generateArray(len: number): string[] {
  const result: string[] = [];
  for (let i = 0; i < len; i++) {
    result.push(i.toString().padStart(2, "0"));
  }
  return result;
}

const defaultValue = "00";
const hourList = generateArray(24);
const minuteList = generateArray(60);
const secondList = generateArray(60);

const typeRefs = ref([]) as Ref<RecycleScroller>;
ctx.value = inject(timeInjectionKey, undefined);

const globalValue = ref<string[]>(["", "", ""]);
const confirmDisabled = computed<boolean>(() => globalValue.value.filter((item) => item === "").length > 0);

const handleClick = (index: number, item: string) => {
  globalValue.value[index] = item;
  scrollTo(index, item);
  setDefault();
};

const setDefault = () => {
  for (let i = 0; i < globalValue.value.length; i++) {
    const element = globalValue.value[i];

    if (!element) {
      globalValue.value[i] = defaultValue;
      scrollTo(i);
    }
  }
};

const setNow = () => {
  const now = dayjs().format("HH:mm:ss");
  globalValue.value = now.split(":");

  for (let i = 0; i < globalValue.value.length; i++) {
    const item = globalValue.value[i];
    scrollTo(i, item);
  }
};

const scrollTo = (i: number, item: string = defaultValue) => {
  typeRefs.value[i]?.scrollToItem(item);
};

const handleSelect = () => {
  if (!globalValue.value) return;

  ctx.value?.onSelect(globalValue.value.join(":"));
};

const onVisible = (index: number) => {
  if(globalValue.value[index]){
    scrollTo(index, globalValue.value[index]);
  }
};

watch(
  () => ctx.value?.modelValue,
  () => {
    if (!ctx.value?.modelValue) return;

    globalValue.value = ["", "", ""];

    const arr = ctx.value?.modelValue.split(":");
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      globalValue.value[i] = Number(element).toString().padStart(2, "0");
    }
  },
  {
    immediate: true,
  }
);
</script>
