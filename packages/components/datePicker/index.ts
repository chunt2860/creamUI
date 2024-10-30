import _datePicker from "./src/datePicker.vue";

export const DatePicker = _datePicker;

export * from "./src/types";
export * from "./src/props";

export type DatePickerInstance = InstanceType<typeof DatePicker>;
export default DatePicker;
