import { InjectionKey } from "vue";

export type DoptionValue = string | number;

export interface DropdownContext {
  onSelect: (value?: DoptionValue) => void;
}

export const dropdownInjectionKey: InjectionKey<DropdownContext> = Symbol("DropdownCtxKey");
