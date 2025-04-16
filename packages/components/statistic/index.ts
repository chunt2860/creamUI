import _statistic from "./src/statistic.vue";

export const Statistic = _statistic;

export * from "./src/props";

export type StatisticInstance = InstanceType<typeof Statistic>;
export default Statistic;
