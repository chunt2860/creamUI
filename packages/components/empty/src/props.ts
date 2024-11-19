import { ExtractPropTypes } from "vue";

export const emptyProps = {
  /**
   * @type string
   * @description Content text.
   * @default "暂无数据"
   */
  content: { type: String, default: "暂无数据" },
};

export type EmptyProps = ExtractPropTypes<typeof emptyProps>;
