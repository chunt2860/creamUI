import _alert from "./src/alert.vue";

export const Alert = _alert;

export * from "./src/props";

export type AlertInstance = InstanceType<typeof Alert>;
export default Alert;
