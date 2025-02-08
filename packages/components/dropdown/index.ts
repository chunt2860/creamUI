import _dropdown from "./src/dropdown.vue";
import _doption from "./src/components/doption.vue";

export const Dropdown = _dropdown;
export const Doption = _doption;

export * from "./src/types";
export * from "./src/props";

export type DropdownInstance = InstanceType<typeof Dropdown>;
export type DoptionInstance = InstanceType<typeof Doption>;
export default Dropdown;
