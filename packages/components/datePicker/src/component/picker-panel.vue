<template>
  <div :class="clsBlockName">
    <div :class="`${clsBlockName}-wrapper`">
      <component ref="tableRef" :is="tableMap[currentTable]" @change-picker="onChangePicker"></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { inject, ref } from "vue";
import dateTable from "./date-table.vue";
import monthTable from "./month-table.vue";
import yearTable from "./year-table.vue";
import { dateInjectionKey, DatePickerContext, PanelType } from "../types";

defineOptions({ name: "DatePickerPanel" });
const { clsBlockName } = useNamespace("datePicker-panel");

const currentTable = ref<string>("year");
const tableMap = {
  date: dateTable,
  month: monthTable,
  year: yearTable,
};

const ctx = ref<DatePickerContext>();
ctx.value = inject(dateInjectionKey, undefined);

const tableRef = ref();
const onChangePicker = (typeName: PanelType) => {
  currentTable.value = typeName;
};
</script>
