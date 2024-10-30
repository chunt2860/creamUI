<template>
  <div :class="[name, 'select-none']">
    <div :class="`${name}-header`">
      <div :class="`${name}-header-inner`">
        <span :class="`${name}-header-inner-year`" @click.stop="handleChangePicker(PanelType.Year, currentYear)">
          {{ currentYear }}
        </span>
        <span :class="`${name}-header-inner-month`" @click.stop="handleChangePicker(PanelType.Month, currentMonth)">
          {{ months[currentMonth] }}
        </span>
      </div>
      <div :class="`${name}-header-option`">
        <IconArrowLeftDoubleFill @click="handleChange('year', 'prev')" size="22" />
        <IconArrowLeftSLine @click="handleChange('month', 'prev')" size="22" />
        <IconArrowRightSLine @click="handleChange('month', 'next')" size="22" />
        <IconArrowRightDoubleFill @click="handleChange('year', 'next')" size="22" />
      </div>
    </div>
    <div :class="`${name}-week`">
      <span :class="`${name}-week-inner`" v-for="v in weeks">{{ v }}</span>
    </div>
    <div :class="`${name}-body`">
      <div :class="`${name}-body-row`" v-for="row in dates">
        <span
          v-for="col in row"
          :class="[
            `${name}-body-inner`,
            `day-cell-${col.type}`,
            { active: (ctx?.modelValue !== '' || ctx?.showTime) && currentVal === col.value },
            { 'to-day': col.value === toDay },
          ]"
          @click="handleSelect(col)"
        >
          {{ col.label }}
        </span>
      </div>
    </div>
    <div v-if="!ctx?.showTime" :class="`${name}-footer`">
      <bp-button type="text" status="primary" @click="handleSelect({ value: toDay })"> 今天 </bp-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from "vue";
import {
  IconArrowLeftSLine,
  IconArrowRightSLine,
  IconArrowLeftDoubleFill,
  IconArrowRightDoubleFill,
} from "birdpaper-icon";
import { DatePickerContext, DayCell, LangsType, PanelType, dateInjectionKey } from "../types";
import BpButton from "@birdpaper-ui/components/button/index";
import { useDayJs } from "../core";

export default defineComponent({
  name: "DateTable",
  components: { IconArrowLeftSLine, IconArrowRightSLine, IconArrowLeftDoubleFill, IconArrowRightDoubleFill },
  emits: ["change-picker"],
  setup(props, { emit }) {
    const name = "bp-date-table";

    const ctx = ref<DatePickerContext>();
    ctx.value = inject(dateInjectionKey, undefined);

    const { toDay, current, currentMonth, currentYear, dates, setDates, changeMonth, changeYear, weeks, months } =
      useDayJs(ctx.value?.langs as LangsType, ctx.value?.modelValue as string);

    const currentVal = ref(current.value && current.value.format("YYYY-MM-DD"));
    const currentTimeVal = ref("");
    setDates("YYYY-MM-DD");

    const timeTableRef = ref();
    const handleSelect = (date: DayCell) => {
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
      emit("change-picker", typeName, val);
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

    return {
      ctx,
      toDay,
      current,
      currentVal,
      currentTimeVal,
      name,
      weeks,
      months,
      dates,
      currentYear,
      currentMonth,
      handleChange,
      handleSelect,
      handleChangePicker,
      PanelType,
      timeTableRef,
      onTimeSelect,
      getValue,
      setNow,
    };
  },
});
</script>
