<template>
  <div :class="clsBlockName">
    <div :class="`${clsBlockName}-wrapper`">
      <component ref="tableRef" :is="tableMap[currentTable]" @change-picker="onChangePicker"></component>
    </div>
    <!-- <div :class="`${clsBlockName}-footer`" v-if="ctx.showTime && currentTable === 'date'">
      <bp-button size="mini" @click="setNowTime">此刻</bp-button>
      <bp-button size="mini" type="primary" :disabled="confirmBtnDisabled" status="primary" @click="onConfirm">确定</bp-button>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { computed, inject, ref } from "vue";
import dateTable from "./date-table.vue";
// import monthTable from "./month-table.vue";
// import yearTable from "./year-table.vue";
import { dateInjectionKey, DatePickerContext, PanelType } from "../types";

defineOptions({ name: "DatePickerPanel" });
const { clsBlockName } = useNamespace("datePicker-panel");

const currentTable = ref<string>("date");
const tableMap = {
  date: dateTable,
  // month: monthTable,
  // year: yearTable,
};

const ctx = ref<DatePickerContext>();
ctx.value = inject(dateInjectionKey, undefined);

const tableRef = ref();
const onChangePicker = (typeName: PanelType) => {
  currentTable.value = typeName;
};

const setNowTime = () => {
  tableRef.value.setNow();
};

const confirmBtnDisabled = computed(() => {
  if (tableRef.value) {
    const { currentVal, currentTimeVal } = tableRef.value;
    return !currentVal || !currentTimeVal;
  }
  return true;
});

const onConfirm = () => {
  const val = tableRef.value.getValue() || "";
  ctx.value?.onSelect(val, {}, true);
};
</script>
