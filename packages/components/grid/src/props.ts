import { ExtractPropTypes, PropType } from "vue";
import { Align, ColResponsive, Justify } from "./types";

export const rowProps = {
  /**
   * @type [string, number]
   * @description Grid spacing.
   */
  gutter: {
    type: [String, Number] as PropType<string | number>,
  },
  /**
   * @type Justify
   * @description Horizontal alignment
   * @default "start"
   */
  justify: {
    type: String as PropType<Justify>,
    default: "start",
  },
  /**
   * @type Align
   * @description Vertical alignment
   * @default "start"
   */
  align: {
    type: String as PropType<Align>,
    default: "start",
  },
} as const;

export const colProps = {
  /**
   * @type number
   * @description 1-24 Number of fields 1-24.
   * @default 24
   */
  span: {
    type: Number,
    default: 24,
  },
  /**
   * @type number
   * @description Number of offset.
   * @default 0
   */
  offset: {
    type: Number,
    default: 0,
  },
  /**
   * @type ColResponsive
   * @description <768px Responsive config.
   */
  xs: { type: [Object, Number] as PropType<ColResponsive> },
  /**
   * @type ColResponsive
   * @description ≥768px Responsive config.
   */
  sm: { type: [Object, Number] as PropType<ColResponsive> },
  /**
   * @type ColResponsive
   * @description ≥992px Responsive config.
   */
  md: { type: [Object, Number] as PropType<ColResponsive> },
  /**
   * @type ColResponsive
   * @description ≥1200px Responsive config.
   */
  lg: { type: [Object, Number] as PropType<ColResponsive> },
  /**
   * @type ColResponsive
   * @description ≥1920px Responsive config.
   */
  xl: { type: [Object, Number] as PropType<ColResponsive> },
} as const;

export type RowProps = ExtractPropTypes<typeof rowProps>;
export type ColProps = ExtractPropTypes<typeof colProps>;
