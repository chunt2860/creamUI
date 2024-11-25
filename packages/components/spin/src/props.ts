import { Component, ExtractPropTypes, PropType } from "vue";

export type SpinSize = "small" | "default" | "large";

export const spinProps = {
  /**
   * @type boolean
   * @description Whether to show the loading state(Only when in the container).
   * @default true
   */
  spinning: {
    type: Boolean,
    default: true,
  },
  /**
   * @type number | Component
   * @description The default icon number which 1-5 or icon component.
   * @default 1
   */
  spinIcon: {
    type: [Number, Object] as PropType<number | Component>,
    validator: (val: unknown) => {
      if (typeof val === "number") {
        return [1, 2, 3, 4, 5].includes(val);
      }
      return typeof val === "object";
    },
    default: 1,
  },
  /**
   * @type string
   * @description The text of the loading indicator.
   * @default ''
   */
  description: {
    type: String,
    default: "",
  },
} as const;

export type SpinProps = ExtractPropTypes<typeof spinProps>;
