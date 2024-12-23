import { EventItem, PropItem } from "../../.vitepress/components/api-block/src/types";

export const selectProps: PropItem[] = [
  { name: "v-model", remark: "绑定值", type: ["SelectValue"], optional: ["Number", "String"] },
  { name: "name", remark: "选择器名称", type: ["String"] },
  { name: "placeholder", remark: "占位文本", type: ["String"] },
  {
    name: "size",
    remark: "选择器尺寸",
    type: ["InputSize"],
    optional: ["mini", "small", "default", "large"],
    default: "default",
  },
  { name: "disabled", remark: "是否禁用", type: ["Boolean"], default: "false" },
  { name: "clearable", remark: "是否允许清空", type: ["Boolean"], default: "false" },
];

export const optionProps: PropItem[] = [
  { name: "value", remark: "绑定值", type: ["SelectValue"], optional: ["Number", "String"] },
  { name: "label", remark: "显示文本", type: ["String"] },
  { name: "disabled", remark: "是否禁用", type: ["Boolean"], default: "false" },
];

export const selectEvents: EventItem[] = [{ name: "change", remark: "选项改变触发", params: "val: SelectValue" }];
