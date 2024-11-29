import _button from "./src/button.vue";
import _buttonGroup from "./src/buttonGroup";

export const Button = _button;
export const ButtonGroup = _buttonGroup;

export * from "./src/types";
export * from "./src/props";

export type ButtonInstance = InstanceType<typeof Button>;
export type ButtonGroupInstance = InstanceType<typeof ButtonGroup>;
export default Button;
