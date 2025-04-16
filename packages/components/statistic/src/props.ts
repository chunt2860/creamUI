import { ExtractPropTypes } from "vue";

export const statisticProps = {
  value: {
    type: Number,
  },
  placeholder: {
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
  precision: {
    type: Number,
    default: 0,
  },
};

export type StatisticProps = ExtractPropTypes<typeof statisticProps>;
