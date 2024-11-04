/**
 * 将一维数组转换为二维数组。
 * @param arr - 要转换的一维数组。
 * @param rows - 二维数组的行数。
 * @param cols - 二维数组的列数。
 * @returns 返回一个二维数组，其中每个子数组的长度为 cols，总行数为 rows。
 */
export function arrayTo2DArray<T>(arr: T[], rows: number, cols: number): T[][] {
  return arr.reduce((acc, val, i) => {
    let row = Math.floor(i / cols);
    acc[row] = [...(acc[row] || []), val];
    return acc;
  }, [] as T[][]);
}
