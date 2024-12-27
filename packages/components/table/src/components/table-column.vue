<template>
  <td :class="cls">
    <template v-if="!hasCustomCell && dataIndex">
      {{ dataIndex && record[dataIndex] }}
    </template>

    <template v-else>
      <slot name="cell" :record="record" :rowIndex="rowIndex" />
    </template>
  </td>
</template>

<script lang="ts" setup>
import { useNamespace } from "@birdpaper-ui/hooks";
import { computed, useSlots } from "vue";
import { TableColumnProps, tableColumnProps } from "../props";

defineOptions({ name: "TableColumn" });
const { clsBlockName } = useNamespace("table-column");

const props: TableColumnProps = defineProps(tableColumnProps);
const slots = useSlots();

const cls = computed<string[]>(() => [clsBlockName, `${clsBlockName}-${props.align}`]);
const hasCustomCell = computed(() => !!slots?.cell);
</script>
