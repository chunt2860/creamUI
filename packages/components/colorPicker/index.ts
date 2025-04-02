import _colorPicker from "./src/color-picker.vue";

export const ColorPicker = _colorPicker;

export * from "./src/props";

export type ColorPickerInstance = InstanceType<typeof ColorPicker>;
export default ColorPicker;
