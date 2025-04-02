import { ExtractPropTypes, PropType } from "vue";

export const colorPickerProps = {
  /**
   * @type string
   * @description Hide trigger or not.
   * @default false
   */
  hideTrigger: {
    type: Boolean,
    default: false,
  },
} as const;

export type ColorPickerProps = ExtractPropTypes<typeof colorPickerProps>;
