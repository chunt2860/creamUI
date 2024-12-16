import { Component, ExtractPropTypes, PropType } from "vue";

export const alertProps = {
  /**
   * @type string
   * @description The title.
   * @default ""
   */
  title: {
    type: String,
    default: "",
  },
  /**
   * @type string
   * @description The content.
   * @default ""
   */
  content: {
    type: String,
    default: "",
  },
  /**
   * @type string
   * @description The status.
   * @default "info"
   */
  status: {
    type: String as PropType<"success" | "warning" | "danger" | "info">,
    default: "info",
  },
  /**
   * @type Component
   * @description The icon.
   */
  icon: {
    type: Object as PropType<Component>,
  },
  /**
   * @type Boolean
   * @description Whether to show a border.
   * @default false
   */
  hideBorder: {
    type: Boolean,
    default: false,
  },
  /**
   * @type Boolean
   * @description Whether to hide the icon.
   * @default false
   */
  hideIcon: {
    type: Boolean,
    default: false,
  },
  /**
   * @type Boolean
   * @description Whether to show a close button.
   * @default false
   */
  showClose: {
    type: Boolean,
    default: false,
  },
};

export type AlertProps = ExtractPropTypes<typeof alertProps>;
