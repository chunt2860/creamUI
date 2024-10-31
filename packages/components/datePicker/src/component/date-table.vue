<template>
  <div :class="[clsBlockName, 'select-none']">
    <div :class="`${clsBlockName}-header`">
      <div :class="`${clsBlockName}-header-inner`">
        <span
          :class="`${clsBlockName}-header-inner-year`"
          @click.stop="handleChangePicker(PanelType.Year, currentYear)"
        >
          {{ currentYear }}
        </span>
        <span
          :class="`${clsBlockName}-header-inner-month`"
          @click.stop="handleChangePicker(PanelType.Month, currentMonth)"
        >
          {{ months[currentMonth] }}
        </span>
      </div>
      <div :class="`${clsBlockName}-header-option`">
        <IconArrowLeftDoubleFill @click="handleChange('year', 'prev')" size="22" />
        <IconArrowLeftSLine @click="handleChange('month', 'prev')" size="22" />
        <IconArrowRightSLine @click="handleChange('month', 'next')" size="22" />
        <IconArrowRightDoubleFill @click="handleChange('year', 'next')" size="22" />
      </div>
    </div>
    <div :class="`${clsBlockName}-week`">
      <span :class="`${clsBlockName}-week-inner`" v-for="v in weeks">{{ v }}</span>
    </div>
    <div :class="`${clsBlockName}-body`">
      <div :class="`${clsBlockName}-body-row`" v-for="row in dates">
        <span
          v-for="col in row"
          :class="[
            ...cellCls(col.type),
            { active: (ctx?.modelValue !== '' || ctx?.showTime) && currentVal === col.value },
            { 'to-day': col.value === toDay },
          ]"
          @click="handleSelect(col)"
        >
          {{ col.label }}
        </span>
      </div>
    </div>
    <div v-if="!ctx?.showTime" :class="`${clsBlockName}-footer`">
      <bp-button type="text" status="primary" @click="handleSelect({ value: toDay })"> 今天 </bp-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from "@birdpaper-ui/hooks";
import { ref, inject } from "vue";
import {
  IconArrowLeftSLine,
  IconArrowRightSLine,
  IconArrowLeftDoubleFill,
  IconArrowRightDoubleFill,
} from "birdpaper-icon";
import { DatePickerContext, DayCell, LangsType, PanelType, dateInjectionKey } from "../types";
import BpButton from "@birdpaper-ui/components/button/index";
import { useDayJs } from "../core";

const emits = defineEmits(["change-picker"]);

defineOptions({ name: "DateTavke" });
const { clsBlockName } = useNamespace("date-table");

const cellCls = (cellType: string) => [`${clsBlockName}-body-inner`, `day-cell-${cellType}`];

const ctx = ref<DatePickerContext>();
ctx.value = inject(dateInjectionKey, undefined);

const { toDay, current, currentMonth, currentYear, dates, setDates, changeMonth, changeYear, weeks, months } = useDayJs(
  ctx.value?.langs as LangsType,
  ctx.value?.modelValue as string
);

const currentVal = ref(current.value && current.value.format("YYYY-MM-DD"));
const currentTimeVal = ref("");
setDates("YYYY-MM-DD");

const timeTableRef = ref();
const handleSelect = (date: DayCell | { value: string }) => {
  currentVal.value = date.value;
  if (ctx.value?.showTime) {
    const time = timeTableRef.value.getTime();
    currentTimeVal.value = time;
    return;
  }
  ctx.value?.onSelect(currentVal.value, {}, true);
};

const onTimeSelect = (time: string) => {
  currentTimeVal.value = time;
};

/**
 * 月份/年份切换
 * @param mode 切换模式
 * @param type 类型
 * @param step 跨度
 */
const handleChange = (mode: "month" | "year", type: "prev" | "next", step: number = 1) => {
  let v = mode === "month" ? currentMonth.value : currentYear.value;
  v = type === "next" ? v + step : v - step;
  mode === "month" ? changeMonth(v) : changeYear(v);
  setDates(ctx.value?.valueFormat || "--");
};

const handleChangePicker = (typeName: PanelType, val: number) => {
  emits("change-picker", typeName, val);
};

const getValue = () => {
  const val = `${currentVal.value} ${currentTimeVal.value}`;
  ctx.value?.onSelect(val, {}, true);

  return val;
};

const setNow = () => {
  currentVal.value = current.value && current.value.format("YYYY-MM-DD");

  timeTableRef.value.setNow();
  currentTimeVal.value = timeTableRef.value.getTime();
};
</script>
