import { ExtractPropTypes, PropType } from "vue";

export const stepProps = {
  index: {
    type: Number,
    required: true,
    default: 0,
    validator: (val: number) => val >= 0,
  },
};

export type StepProps = ExtractPropTypes<typeof stepProps>;
