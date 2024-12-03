import type { ExtractPropTypes, PropType } from "vue";

export const modalProps = {
  /**
   * @type string
   * @description Title.
   * @default ""
   */
  title: {
    type: String,
    default: "",
  },
  /**
   * @type string | number
   * @description Modal width.
   * @default "50%"
   */
  width: {
    type: [String, Number] as PropType<string | number>,
    default: "50%",
  },
  /**
   * @type boolean
   * @description Whether to center the modal.
   * @default false
   */
  center: {
    type: Boolean,
    default: false,
  },
  /**
   * @type string
   * @description Modal top.
   * @default "0"
   */
  top: {
    type: String,
    default: "0",
  },
  /**
   * @type string
   * @description Modal bottom.
   * @default "0"
   */
  bottom: {
    type: String,
    default: "0",
  },
  /**
   * @type boolean
   * @description Whether to close the modal when clicking the mask.
   * @default true
   */
  maskClosable: {
    type: Boolean,
    default: true,
  },
  /**
   * @type boolean
   * @description Whether to hide the header.
   * @default false
   */
  hideHeader: {
    type: Boolean,
    default: false,
  },
  /**
   * @type boolean
   * @description Whether to hide the footer.
   * @default false
   */
  hideFooter: {
    type: Boolean,
    default: false,
  },
  /**
   * @type boolean
   * @description Whether to hide the close button.
   * @default false
   */
  hideClose: {
    type: Boolean,
    default: false,
  },
  /**
   * @type boolean
   * @description Whether to be full screen.
   * @default false
   */
  fullscreen: {
    type: Boolean,
    default: false,
  },
  /**
   * @type string
   * @description Confirm button content.
   * @default "确认"
   */
  okText: {
    type: String,
    default: "确认",
  },
  /**
   * @type string
   * @description Cancel button content.
   * @default "取消"
   */
  cancleText: {
    type: String,
    default: "取消",
  },
  /**
   * @type Function
   * @description Callback function before confirming.
   */
  onBeforeOk: {
    type: Function as PropType<() => boolean>,
  },
} as const;

export type ModalProps = ExtractPropTypes<typeof modalProps>;
