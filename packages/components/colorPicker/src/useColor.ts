import { getPercentNumber } from "@birdpaper-ui/components/utils/helper";

/**
 * 将 HSV 颜色空间转换为 RGB 颜色空间
 * @param h - 色相（Hue），取值范围为 0 到 360
 * @param s - 饱和度（Saturation），取值范围为 0 到 100
 * @param v - 明度（Value），取值范围为 0 到 100
 * @returns 一个包含 RGB 值的元组，每个值的范围为 0 到 255
 */
export const hsvToRgb = (h: number, s: number, v: number): [number, number, number] => {
  const f = (n: number) => {
    const k = (n + h / 60) % 6;
    const value = Math.round(v * 255 * (1 - (s / 100) * Math.max(0, Math.min(k, 4 - k, 1))));
    return Math.min(255, Math.max(0, value));
  };
  return [f(5), f(3), f(1)];
};

/**
 * 获取滑块的位置
 * @param ev - 鼠标事件对象
 * @param sliderBar - 滑块条的 HTML 元素
 * @param pointOffset - 滑块点的偏移量，默认为 0
 * @returns 滑块在滑块条上的位置（像素值）
 */
export const getSliderPosition = (ev: MouseEvent, sliderBar: HTMLElement, pointOffset: number = 0) => {
  const rect = sliderBar.getBoundingClientRect();
  const percent = getPercentNumber(ev.clientX - rect.x - pointOffset, rect.width, pointOffset);
  const x = percent * rect.width;
  const v = (x + pointOffset) / rect.width;

  return { x, v };
};

/**
 * 获取拾色器的位置
 * @param ev - 鼠标事件对象
 * @param pickerPanel - 拾色器面板的 HTML 元素
 * @param pointOffset - 拾色点的偏移量，默认为 0
 * @returns 拾色器在面板上的位置（像素值）以及对应的饱和度（Saturation）和亮度（Lightness）
 */
export const getPickerPosition = (ev: MouseEvent, pickerPanel: HTMLElement, pointOffset: number = 0) => {
  const rect = pickerPanel.getBoundingClientRect();
  const x = getPercentNumber(ev.clientX - rect.x - 6, rect.width, pointOffset) * rect.width;
  const y = getPercentNumber(ev.clientY - rect.y - 6, rect.height, pointOffset) * rect.height;

  const s = ((x + pointOffset) / rect.width) * 100; // 计算饱和度，范围为 0 到 100
  const l = 1 - (y + pointOffset) / rect.height; // 计算亮度，范围为 0 到 1

  return { x, y, s, l };
};
