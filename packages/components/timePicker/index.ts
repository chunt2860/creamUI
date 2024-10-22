import _timePicker from "./src/timePicker.vue";

export const TimePicker = _timePicker;

export * from "./src/types";
export * from "./src/props";

export type TimePickerInstance = InstanceType<typeof TimePicker>;
export default TimePicker;
