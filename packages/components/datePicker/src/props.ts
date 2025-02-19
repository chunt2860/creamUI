import { InputSize } from "@birdpaper-ui/components/input/src/types";
import { ExtractPropTypes, PropType } from "vue";
import { LangsType } from "./types";

export const commonPickerProps = {
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
   * @description Hide trigger or not.
   * @default false
   */
  hideTrigger: {
    type: Boolean,
    default: false,
  },
  /**
   * @type string
   * @description Language.
   * @default "zh-cn"
   */
  langs: {
    type: String as PropType<LangsType>,
    default: "zh-cn",
  },
};

export const datePickerProps = {
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
   * @type boolean
   * @description Show time or not.
   * @default false
   */
  showTime: {
    type: Boolean,
    default: false,
  },
} as const;

export const yearPickerProps = {
  /**
   * @type string
   * @description Value format.
   * @default "YYYY"
   */
  valueFormat: {
    type: String,
    default: "YYYY",
  },
} as const;

export const monthPickerProps = {
  /**
   * @type string
   * @description Value format.
   * @default "YYYY-MM"
   */
  valueFormat: {
    type: String,
    default: "YYYY-MM",
  },
} as const;

export const rangePickerProps = {
  /**
   * @type string[]
   * @description Placeholder text content.
   * @default ["",""]
   */
  placeholder: {
    type: Array as PropType<string[]>,
    default: ["", ""],
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
   * @type string
   * @description Hide trigger or not.
   * @default false
   */
  hideTrigger: {
    type: Boolean,
    default: false,
  },
  /**
   * @type string
   * @description Language.
   * @default "zh-cn"
   */
  langs: {
    type: String as PropType<LangsType>,
    default: "zh-cn",
  },
};

export type DatePickerProps = ExtractPropTypes<typeof commonPickerProps & typeof datePickerProps>;
export type YearPickerProps = ExtractPropTypes<typeof commonPickerProps & typeof yearPickerProps>;
export type MonthPickerProps = ExtractPropTypes<typeof commonPickerProps & typeof monthPickerProps>;
export type RangePickerProps = ExtractPropTypes<typeof rangePickerProps>;
