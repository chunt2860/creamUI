import { ExtractPropTypes } from "vue";

export const statisticProps = {
  value: {
    type: Number,
  },
  defaultText: {
    type: String,
    default: "--",
  },
  separator: {
    type: String,
    default: ",",
  },
  showSeparator: {
    type: Boolean,
    default: true,
  },
};

export type StatisticProps = ExtractPropTypes<typeof statisticProps>;
