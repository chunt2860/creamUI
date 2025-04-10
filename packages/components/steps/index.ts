import _steps from "./src/steps";
import _step from "./src/components/step.vue";

export const Steps = _steps;
export const Step = _step;

// export * from "./src/types";

export type StepsInstance = InstanceType<typeof Steps>;
export type StepInstance = InstanceType<typeof Step>;
export default Steps;
