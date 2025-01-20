import { PropItem } from "../../.vitepress/components/api-block/src/types";

export const Iconprops: PropItem[] = [
  {
    name: "size",
    remark: "图标尺寸",
    type: ["String"],
    default: "18px",
  },
  { name: "fill", remark: "填充颜色", type: ["String"], default: "#595959" },
  { name: "spin", remark: "是否持续旋转", type: ["Boolean"], default: "false" },
  { name: "rotate", remark: "旋转角度", type: ["Number"] },
];

export const IconAppends: PropItem[] = [
  {
    name: "iconType",
    remark: "图标类型数组",
    type: ["String[]"],
  },
  { name: "iconInfo", remark: "图标枚举", type: ["Array<{name:string, list:string[]}>"] },
  { name: "iconNumbers", remark: "图标数量", type: ["Number"] },
];
