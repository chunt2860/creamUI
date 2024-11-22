import { ExtractPropTypes, PropType } from "vue";
import { ImageFit } from "./types";

export const imageProps = {
  /**
   * @type string
   * @description Image src.
   */
  src: {
    type: String,
    default: '',
  },
  /**
   * @type string
   * @description Image alt.
   */
  alt: {
    type: String,
    default: '',
  },
  /**
   * @type string
   * @description Image title.
   */
  title: {
    type: String,
    default: '',
  },
  /**
   * @type string
   * @description Image width.
   */
  width: { type: String },
  /**
   * @type string
   * @description Image height.
   */
  height: { type: String },
  /**
   * @type string
   * @description Image fit.
   * @default "cover"
   */
  fit: {
    type: String as PropType<ImageFit>,
    default: 'fill',
  },
  /**
   * @type string
   * @description Image fallback.
   */
  fallback: {
    type: String,
    default: '',
  },
  /**
   * @type boolean
   * @description Image preview.
   */
  preview: {
    type: Boolean,
    default: false,
  },
  /**
   * @type boolean
   * @description Whether to enable lazy loading.
   * @default false
   */
  lazy: {
    type: Boolean,
    default: false,
  },
  /**
   * @type string
   * @description Placeholder image for lazy loading.
   * @default ""
   */
  placeholder: {
    type: String,
    default: '',
  },
} as const;

export type ImageProps = ExtractPropTypes<typeof imageProps>;
