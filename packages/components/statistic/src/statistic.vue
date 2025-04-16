<template>
  <div>s</div>
</template>

<script lang="ts" setup>
import { statisticProps, StatisticProps } from "./props";
import { useNamespace } from "@birdpaper-ui/hooks";

defineOptions({ name: "Statistic" });
const { clsBlockName } = useNamespace("statistic");

const props: StatisticProps = defineProps(statisticProps);
</script>
