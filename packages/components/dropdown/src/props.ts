import { TriggerPosition, TriggerType } from "@birdpaper-ui/components/trigger/src/types";
import { ExtractPropTypes, PropType } from "vue";
import { DoptionValue } from "./types";

export const dropdownProps = {
  /**
   * @type {string}
   * @description The position of the popconfirm.
   * @default "bottom"
   */
  position: {
    type: String as PropType<TriggerPosition>,
    default: "bottom",
  },
  trigger: {
    type: String as PropType<TriggerType>,
    default: "click",
  },
} as const;

export const doptionProps = {
  /**
   * @type {DoptionValue}
   * @description The value of the option.
   * @default ""
   */
  value: {
    type: [String, Number] as PropType<DoptionValue>,
  },
  /**
   * @type {Boolean}
   * @description Whether the option is selected.
   * @default false
   */
  disabled: {
    type: Boolean,
    default: false,
  },
};

export type DropdownProps = ExtractPropTypes<typeof dropdownProps>;
export type DoptionProps = ExtractPropTypes<typeof doptionProps>;
