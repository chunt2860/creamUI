<template>
  <div :class="clsBlockName">
    <div :class="`${clsBlockName}-int`">{{ intText }}</div>
    <div :class="`${clsBlockName}-dev`">{{ decText }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { statisticProps, StatisticProps } from "./props";
import { useNamespace } from "@birdpaper-ui/hooks";
import { isFloat, isNumber, toInt } from "radash";
import { formatNumberWithCommas } from "@birdpaper-ui/components/utils/number";

defineOptions({ name: "Statistic" });
const { clsBlockName } = useNamespace("statistic");

const props: StatisticProps = defineProps(statisticProps);

const intText = ref<string>("");
const decText = ref<string>("");

const init = () => {
  if (props.value === undefined || props.value === null || !isNumber(props.value)) {
    intText.value = props.placeholder;
    decText.value = "";
    return;
  }

  intText.value = getIntText(props.value);
  if (props.precision) {
    decText.value = getDecimalText(props.value);
  }
};

const getIntText = (value: number): string => {
  let val: string = "";
  if (isNumber(value)) {
    val = toInt(value).toString();
  }

  if (props.showSeparator) {
    val = formatNumberWithCommas(Number(val), props.separator);
  }

  return val;
};

const getDecimalText = (value: number): string => {
  let val: string = "";
  if (!isFloat(value)) {
    val = "0".repeat(props.precision);
  }

  val = value.toString().split(".")[1] || "";
  if (val.length < props.precision) {
    val = val.padEnd(props.precision, "0");
  } else if (val.length > props.precision) {
    val = val.slice(0, props.precision);
  }

  return `.${val}`;
};

watch(
  () => props.value,
  () => {
    init();
  },
  { immediate: true }
);
</script>
