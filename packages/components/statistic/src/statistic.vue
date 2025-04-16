<template>
  <div :class="clsBlockName">
    <div :class="`${clsBlockName}-inner`">{{ intText }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { statisticProps, StatisticProps } from "./props";
import { useNamespace } from "@birdpaper-ui/hooks";
import { isNumber, toInt } from "radash";
import { formatNumberWithCommas } from "@birdpaper-ui/components/utils/number";

defineOptions({ name: "Statistic" });
const { clsBlockName } = useNamespace("statistic");

const props: StatisticProps = defineProps(statisticProps);

const intText = ref<string>("");
const decText = ref<string>("");

const init = () => {
  if (props.value === undefined || props.value === null || !isNumber(props.value)) {
    intText.value = props.defaultText;
    decText.value = "";
    return;
  }

  intText.value = getIntText(props.value);
};

const getIntText = (value: number) => {
  if (!isNumber(value)) {
    return props.defaultText;
  }

  let val: string = "";
  if (isNumber(value)) {
    val = toInt(value).toString();
  }

  if (props.showSeparator) {
    val = formatNumberWithCommas(Number(val), props.separator);
  }

  return val;
};

watch(
  () => props.value,
  () => {
    init();
  },
  { immediate: true }
);
</script>
