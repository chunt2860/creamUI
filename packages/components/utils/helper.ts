/**
 * 获取一个值相对于最大值的百分比表示。
 * @param value - 当前值。
 * @param max - 最大值。
 * @param _offset - 偏移量，默认为 0。
 * @returns 百分比表示的数值。
 */
export const getPercentNumber = (value: number, max: number, _offset: number = 0) => {
  if (value < -_offset) return -_offset / max; // 如果值小于负偏移量，返回负偏移量占最大值的比例。
  if (value > max - _offset) return 1 - _offset / max; // 如果值大于最大值减去偏移量，返回 1 减去偏移量占最大值的比例。
  return value / max; // 否则返回值占最大值的比例。
};
