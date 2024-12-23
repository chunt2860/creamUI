import { InjectionKey } from "vue";

export declare type SelectValue = string | number | boolean;

export class SelectOption {
  label: string = "";
  value: SelectValue = "";
}

export interface SelectContext {
  modelValue: SelectValue;
  onSelect: (value: SelectValue, payload: SelectOption) => void;
}

export const selectInjectionKey: InjectionKey<SelectContext> = Symbol("SelectCtxKey");
