import { ExtractPropTypes, PropType } from "vue";

export const stepProps = {
  /**
   * @type {number}
   * @description Step index.
   * @default 0
   */
  index: {
    type: Number,
    required: true,
    default: 0,
    validator: (val: number) => val >= 0,
  },
  /**
   * @type {string}
   * @description Step status.
   * @default "wait"
   */
  status: {
    type: String as PropType<"wait" | "process" | "finish" | "error">,
    default: "wait",
  },
  /**
   * @type {string}
   * @description Step description.
   */
  description: {
    type: String,
  },
  /**
   * @type StepsType
   * @description The type of direction.
   * @default "horizontal"
   */
  type: { type: String as PropType<"vertical" | "horizontal">, default: "horizontal" },
  /**
   * @type {boolean}
   * @description Whether to hide the line between steps.
   * @default false
   */
  hideLine: { type: Boolean, default: false },
};

export type StepProps = ExtractPropTypes<typeof stepProps>;
