import { ExtractPropTypes } from "vue";

export const rateProps = {
  /**
   * @type {number}
   * @description The number of rate.
   * @default 5
   */
  count: {
    type: Number,
    default: 5,
  },
  /**
   * @type {boolean}
   * @description Whether to allow half selection.
   * @default false
   */
  half: {
    type: Boolean,
    default: false,
  },
  /**
   * @type {boolean}
   * @description Readonly or not.
   * @default false
   */
  readonly: {
    type: Boolean,
    default: false,
  },
  /**
   * @type {boolean}
   * @description Disabled or not.
   * @default false
   */
  disabled: {
    type: Boolean,
    default: false,
  },
} as const;

export type RateProps = ExtractPropTypes<typeof rateProps>;
