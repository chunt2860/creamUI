import { Component, ExtractPropTypes, PropType } from "vue";
import { TagStatus } from "./types";

export const tagProps = {
  /**
   * @type Component
   * @description Icon component.
   * @default null
   */
  icon: { type: Object as PropType<Component> },
  /**
   * @type TagStatus
   * @description Status.
   * @default gray
   */
  status: { type: String as PropType<TagStatus>, default: "gray" },
  /**
   * @type boolean
   * @description Whether to show the border.
   * @default false
   */
  border: { type: Boolean, default: false },
  /**
   * @type boolean
   * @description Whether to be closeable.
   * @default false
   */
  closeable: { type: Boolean, default: false },
};

export type TagProps = ExtractPropTypes<typeof tagProps>;
