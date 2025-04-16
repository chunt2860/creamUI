import { ExtractPropTypes } from "vue";

export const statisticProps = {
  /**
   * @type {number}
   * @description The number to be formatted.
   */
  value: {
    type: Number,
  },
  /**
   * @type {string}
   * @description The placeholder text.
   * @default "--"
   */
  placeholder: {
    type: String,
    default: "--",
  },
  /**
   * @type {string}
   * @description Separator for thousands.
   * @default ","
   */
  separator: {
    type: String,
    default: ",",
  },
  /**
   * @type {boolean}
   * @description Whether to show the separator.
   * @default false
   */
  showSeparator: {
    type: Boolean,
    default: false,
  },
  /**
   * @type {number}
   * @description The number of decimal places to display.
   * @default 0
   */
  precision: {
    type: Number,
    default: 0,
  },
  /**
   * @type {string|array}
   * @description The font size of the statistic.
   * @default "26px"
   * @example "26px" | ["26px", "20px"]
   */
  fontSize: {
    type: [String, Array],
    default: "26px",
  },
};

export type StatisticProps = ExtractPropTypes<typeof statisticProps>;
