import { Component, ExtractPropTypes, PropType } from "vue";

export const rateProps = {
  count: {
    type: Number,
    default: 5,
  },
} as const;

export type RateProps = ExtractPropTypes<typeof rateProps>;
