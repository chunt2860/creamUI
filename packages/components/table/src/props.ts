import { Component, ExtractPropTypes, PropType } from "vue";
import { ColumnsItem, TableRowSelection } from "./types";

export const tableProps = {
  /**
   * @type Array
   * @description The table data source.
   * @default []
   */
  data: {
    type: Array,
    default: () => [],
  },
  /**
   * @type string
   * @description The table fixed height.
   * @default null
   */
  height: { type: String },
  /**
   * @type boolean
   * @description Bordered or not.
   * @default false
   */
  border: { type: Boolean, default: false },
  /**
   * @type boolean
   * @description Stripe or not.
   * @default false
   */
  stripe: { type: Boolean, default: false },
  /**
   * @type string
   * @description Unique key identifier for a table row.
   * @default "id"
   */
  rowKey: { type: String, default: "id" },
  /**
   * @type boolean
   * @description Loading or not.
   * @default false
   */
  loading: { type: Boolean, default: false },
  /**
   * @type number | Component
   * @description The default icon number which 1-5 or icon component.
   * @default 1
   */
  spinIcon: {
    type: [Number, Object] as PropType<number | Component>,
    validator: (val: unknown) => {
      if (typeof val === "number") {
        return [1, 2, 3, 4, 5].includes(val);
      }
      return typeof val === "object";
    },
    default: 1,
  },
  /**
   * @type string
   * @description The text of the loading indicator.
   * @default ''
   */
  description: {
    type: String,
    default: "",
  },
  /**
   * @type string
   * @description The text when data is empty.
   * @default "Empty."
   */
  emptyText: {
    type: String,
    default: "暂无数据",
  },
  /**
   * @type TableRowSelection
   * @description The table selection config.
   * @default null
   */
  rowSelection: {
    type: Object as PropType<TableRowSelection>,
    default: () => null,
  },
} as const;

/** Table header props. */
export const tableHeaderProps = {
  /**
   * @type ColumnsItem[]
   * @description The table header list.
   * @default []
   */
  list: {
    type: Array as PropType<ColumnsItem[]>,
    default: () => [],
  },
};

/** Table column props. */
export const tableColumnProps = {
  /**
   * @type string
   * @description The column title.
   */
  title: {
    type: String,
  },
  /**
   * @type object
   * @description The data record.
   * @default {}
   */
  record: {
    type: Object,
    default: () => {},
  },
  /**
   * @type string
   * @description The data key.
   */
  dataIndex: { type: String },
  /**
   * @type number
   * @description The record row index.
   */
  rowIndex: { type: Number },
  /**
   * @type number | string
   * @description The col width.
   */
  width: { type: [Number, String] },
  /**
   * @type number | string
   * @description The col min width.
   */
  minWidth: { type: [Number, String] },
  /**
   * @type string
   * @description The col text align type.
   * @default "left"
   */
  align: { type: String, default: "left" },
  /**
   * @type boolean
   * @description Text to omit ellipsis or not.
   * @default false
   */
  ellipsis: { type: Boolean, default: false },
  /**
   * @type boolean
   * @description Show tooltip or not.
   * @default false
   */
  tooltip: { type: Boolean, default: false },
};

export type TableProps = ExtractPropTypes<typeof tableProps>;
export type TableHeaderProps = ExtractPropTypes<typeof tableHeaderProps>;
export type TableColumnProps = ExtractPropTypes<typeof tableColumnProps>;
