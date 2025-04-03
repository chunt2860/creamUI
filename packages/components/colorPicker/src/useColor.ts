import { getPercentNumber } from "@birdpaper-ui/components/utils/helper";

/**
 * 将 HEX 颜色字符串转换为 HSLA 颜色值
 * @param hex - HEX 颜色字符串，例如 "#RRGGBB" 或 "#RRGGBBAA"
 * @returns 如果是有效的 HEX 字符串，返回 HSLA 值的对象；否则返回 null
 */
export const hexToHsla = (hex: string): { h: number; s: number; l: number; a: number } | null => {
  // 验证 HEX 格式
  const isValidHex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/.test(hex);
  if (!isValidHex) return { h: 0, s: 0, l: 0, a: 1 };

  // 提取 RGB 和 Alpha 值
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const a = hex.length === 9 ? parseInt(hex.slice(7, 9), 16) / 255 : 1;

  // 转换为 HSL
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;

  const max = Math.max(rNorm, gNorm, bNorm);
  const min = Math.min(rNorm, gNorm, bNorm);
  const delta = max - min;

  let h = 0;
  if (delta !== 0) {
    if (max === rNorm) {
      h = ((gNorm - bNorm) / delta + (gNorm < bNorm ? 6 : 0)) * 60;
    } else if (max === gNorm) {
      h = ((bNorm - rNorm) / delta + 2) * 60;
    } else {
      h = ((rNorm - gNorm) / delta + 4) * 60;
    }
  }

  const l = (max + min) / 2;
  const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  return {
    h: parseFloat(h.toFixed(4)),
    s: parseFloat((s * 100).toFixed(4)),
    l: parseFloat((l * 100).toFixed(4)),
    a: parseFloat(a.toFixed(4)),
  };
};

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
    const value = parseFloat((v * 255 * (1 - (s / 100) * Math.max(0, Math.min(k, 4 - k, 1)))).toFixed(4));
    return Math.min(255, Math.max(0, value));
  };
  return [f(5), f(3), f(1)];
};

/**
 * 将 HSV 颜色空间转换为 HSL 颜色空间
 * @param h - 色相（Hue），取值范围为 0 到 360
 * @param s - 饱和度（Saturation），取值范围为 0 到 100
 * @param v - 明度（Value），取值范围为 0 到 100
 * @returns 一个包含 HSL 值的对象
 */
export const hsvToHsla = (
  h: number,
  s: number,
  v: number,
  a: number = 1
): { h: number; s: number; l: number; a: number } => {
  const l = ((2 - s / 100) * v) / 2;
  const sHsl = l === 0 || l === 100 ? 0 : (s * v) / (l < 50 ? l * 2 : 200 - l * 2);
  return {
    h: parseFloat(h.toFixed(4)),
    s: parseFloat(sHsl.toFixed(4)),
    l: parseFloat(l.toFixed(4)),
    a: parseFloat(a.toFixed(4)),
  };
};

/**
 * 将 HSLA 颜色空间转换为 HSV 颜色空间
 * @param h - 色相（Hue），取值范围为 0 到 360
 * @param s - 饱和度（Saturation），取值范围为 0 到 100
 * @param l - 亮度（Lightness），取值范围为 0 到 100
 * @param a - 透明度（Alpha），取值范围为 0 到 1
 * @returns 一个包含 HSV 值的对象
 */
export const hslaToHsv = (
  h: number,
  s: number,
  l: number,
  a: number = 1
): { h: number; s: number; v: number; a: number } => {
  const lNorm = l / 100;
  const sNorm = s / 100;

  const v = lNorm + sNorm * Math.min(lNorm, 1 - lNorm);
  const sHsv = v === 0 ? 0 : 2 * (1 - lNorm / v);

  return {
    h: parseFloat(h.toFixed(4)),
    s: parseFloat((sHsv * 100).toFixed(4)),
    v: parseFloat((v * 100).toFixed(4)),
    a: parseFloat(a.toFixed(4)),
  };
};

/**
 * 从 HSV 颜色空间计算亮度（Lightness）
 * @param h - 色相（Hue），取值范围为 0 到 360
 * @param s - 饱和度（Saturation），取值范围为 0 到 100
 * @param v - 明度（Value），取值范围为 0 到 100
 * @returns 亮度（Lightness），取值范围为 0 到 100
 */
export const hsvToLightness = (h: number, s: number, v: number): number => {
  const l = (v * (1 - s / 100)) / 2 + v / 2;
  return Math.round(l * 100);
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
  const v = 1 - (y + pointOffset) / rect.height; // 计算亮度，范围为 0 到 1

  return { x, y, s, v };
};
