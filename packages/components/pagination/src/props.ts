import { ExtractPropTypes } from "vue";

export const paginationProps = {
  /**
   * @type string
   * @description The layout config.
   * @default "prev, pager, next"
   */
  layout: { type: String, default: "prev, pager, next, sizes" },
  /**
   * @type boolean
   * @description Whether to disable the pagination.
   * @default false
   */
  disabled: { type: Boolean, default: false },
  /**
   * @type number
   * @description The total number of.
   * @default 0
   */
  total: { type: Number, default: 0 },
  /**
   * @type number
   * @description The current number of pages.
   * @default 1
   */
  current: { type: Number, default: 1 },
  /**
   * @type number
   * @description The size of entries per page.
   * @default 10
   */
  pageSize: { type: Number, default: () => 10 },
  /**
   * @type array
   * @description The sizes list.
   * @default [10, 20, 50, 100]
   */
  sizesList: { type: Array, default: () => [10, 20, 50, 100] },
  /**
   * @type string
   * @description The previous page button text.
   * @default ""
   */
  prevText: { type: String, default: "" },
  /**
   * @type string
   * @description The next page button text.
   * @default ""
   */
  nextText: { type: String, default: "" },
  /**
   * @type number
   * @description The maximum number of pages.
   * @default 7
   */
  maxPager: { type: Number, default: 7 },
  /**
   * @type string
   * @description The total copywriting template.
   * @default "共 {total} 条"
   */
  totalTmpString: { type: String, default: "共 {total} 条" },
  /**
   * @type string
   * @description The jumper copywriting template.
   * @default "前往{jumper}"
   */
  jumperTmpString: { type: String, default: "前往{jumper}" },
  /**
   * @type string
   * @description The sizes copywriting template.
   * @default "{value} 条/页"
   */
  sizesTmpString: { type: String, default: "{value} 条/页" },
};

export type PaginationProps = ExtractPropTypes<typeof paginationProps>;
