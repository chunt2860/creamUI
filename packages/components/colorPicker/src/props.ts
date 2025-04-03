import { ExtractPropTypes, PropType } from "vue";
import { ColorPickerValueType } from "./types";

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
  valueType: {
    type: String as PropType<ColorPickerValueType>,
    default: "hex",
  },
} as const;

export type ColorPickerProps = ExtractPropTypes<typeof colorPickerProps>;
