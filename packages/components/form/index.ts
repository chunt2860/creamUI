import _form from "./src/form.vue";
import _formItem from "./src/components/form-item.vue";

export const Form = _form;
export const FormItem = _formItem;

export * from "./src/props";
// export * from "./src/types";

export type FormInstance = InstanceType<typeof Form>;
export type FormItemInstance = InstanceType<typeof FormItem>;
export default Form;
