import { InputSize } from "@birdpaper-ui/components/input/src/types";
import { ExtractPropTypes, PropType } from "vue";

export const timePickerProps = {
  /**
   * @type string
   * @description The input name.
   * @default ""
   */
  name: {
    type: String,
  },
  /**
   * @type string
   * @description Placeholder text content.
   * @default ""
   */
  placeholder: {
    type: String,
    default: "",
  },
  /**
   * @type InputSize
   * @description Input sizes.
   * @default default
   */
  size: {
    type: String as PropType<InputSize>,
    default: "default",
  },
  /**
   * @type boolean
   * @description Input is disabled or not.
   * @default false
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * @type boolean
   * @description Clearable or not.
   * @default false
   */
  clearable: {
    type: Boolean,
    default: false,
  },
  /** 
   * @type string
   * @description Value format.
   * @default "YYYY-MM-DD"
   */
  valueFormat: {
    type: String,
    default: "YYYY-MM-DD",
  },
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

export type TimePickerProps = ExtractPropTypes<typeof timePickerProps>;
