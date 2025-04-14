import { ExtractPropTypes, PropType } from "vue";

export const rateProps = {
  count: {
    type: Number,
    default: 5,
  },
  half: {
    type: Boolean,
    default: false,
  },
} as const;

export type RateProps = ExtractPropTypes<typeof rateProps>;
