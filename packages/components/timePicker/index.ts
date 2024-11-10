import _timePicker from "./src/timePicker.vue";
import _timeTable from "./src/components/time-table.vue";

export const TimePicker = _timePicker;
export const TimeTable = _timeTable;

export * from "./src/types";
export * from "./src/props";

export type TimePickerInstance = InstanceType<typeof TimePicker>;
export type TimeTableInstance = InstanceType<typeof TimeTable>;
export default TimePicker;
