<template>
  <div :class="clsBlockName">
    <div :class="`${clsBlockName}-header`">
      <div :class="`${clsBlockName}-header-inner`">
        <span :class="`${clsBlockName}-header-inner-year`"> {{ firstYear }} - {{ firstYear + 12 }}</span>
      </div>
      <div :class="`${clsBlockName}-header-option`">
        <IconArrowLeftDoubleFill @click="handleChange('prev')" size="20px" />
        <IconArrowRightDoubleFill @click="handleChange('next')" size="20px" />
      </div>
    </div>
    <div :class="`${clsBlockName}-body`">
      <div
        v-for="col in yearCell"
        :class="[
          `${clsBlockName}-year-cell`,
          { active: currentVal === col.value },
          { 'to-year': currentVal !== col.value && col.label === dayjs(toDay.value).year() + '' },
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

setYearCell(ctx.value!.valueFormat);

const handleChange = (type: "prev" | "next", step: number = 12) => {
  let val = firstYear.value;
  firstYear.value = type === "next" ? val + step : val - step;
  setYearCell(ctx.value!.valueFormat);
};

const handleSelect = (date: YearCell) => {
  currentVal.value = date.value;
  ctx.value!.onSelect(currentVal.value, {}, false);
  emits("change-picker", "month");
};
</script>
