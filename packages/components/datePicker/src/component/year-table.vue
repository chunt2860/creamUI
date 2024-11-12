<template>
  <div :class="clsBlockName">
    <div :class="`${clsBlockName}-header`">
      <div :class="`${clsBlockName}-header-inner`">
        <span> {{ firstYear + 1 }} - {{ firstYear + 12 }}</span>
      </div>
      <div :class="`${clsBlockName}-header-option`">
        <component v-for="v in options" :is="v.icon" size="22" @click="handleChange(v.type)" />
      </div>
    </div>

    <div :class="`${clsBlockName}-body`">
      <div
        v-for="col in yearCell"
        :class="[
          `${clsBlockName}-year-cell`,
          { active: !!ctx!.model && currentVal === col.label },
          { 'to-year': col.value === dayjs(toDay.value).year() },
        ]"
        @click.stop="handleSelect(col)"
      >
        <span :class="[`${clsBlockName}-year-cell-inner`]">{{ col.label }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from "@birdpaper-ui/hooks";
import { ref, inject } from "vue";
import type { Component } from "vue";
import { DatePickerContext, YearCell, dateInjectionKey } from "../types";
import dayjs from "dayjs";
import { useDayJs } from "../core";
import { IconArrowLeftDoubleFill, IconArrowRightDoubleFill } from "birdpaper-icon";

defineOptions({ name: "YearTable" });
const { clsBlockName } = useNamespace("year-table");
const emits = defineEmits(["change-picker"]);

const ctx = ref<DatePickerContext>();
ctx.value = inject(dateInjectionKey, undefined);

const { toDay, current, firstYear, yearCell, setYearCell } = useDayJs(ctx.value!.langs, ctx.value!.model);
const currentVal = ref(current.value && current.value.format(ctx.value!.valueFormat));

setYearCell();

const options: { icon: Component; type: "prev" | "next" }[] = [
  { icon: IconArrowLeftDoubleFill, type: "prev" },
  { icon: IconArrowRightDoubleFill, type: "next" },
];
const handleChange = (type: "prev" | "next", step: number = 12) => {
  let val = firstYear.value;
  firstYear.value = type === "next" ? val + step : val - step;
  setYearCell();
};

const handleSelect = (date: YearCell) => {
  currentVal.value = date.value.toString();
  ctx.value!.onSelect(currentVal.value, {}, false);
  emits("change-picker", "month");
};
</script>
