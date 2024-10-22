import { InjectionKey } from "vue";

export interface TimePickerContext {
  modelValue: string;
  onSelect: (value: string, payload?: object) => void;
}
export const timeInjectionKey: InjectionKey<TimePickerContext> = Symbol("TimePickerCtxKey");
