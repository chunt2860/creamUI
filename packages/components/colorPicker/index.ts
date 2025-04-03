import _colorPicker from "./src/color-picker.vue";

export const ColorPicker = _colorPicker;

export * from "./src/props";
export * from "./src/types";

export type ColorPickerInstance = InstanceType<typeof ColorPicker>;
export default ColorPicker;
