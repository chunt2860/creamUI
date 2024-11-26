<template>
  <form :class="clsBlockName" @submit.prevent>
    <slot />
  </form>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { provide, reactive, ref } from "vue";
import { FormProps, formProps } from "./props";
import type { FormContext, FormItemContext } from './types';
import Schema from 'async-validator';

defineOptions({ name: "Form" });
const { clsBlockName } = useNamespace("form");

const props: FormProps = defineProps(formProps);

const fields = ref<FormItemContext[]>([]);
const formContext: FormContext = reactive({
  model: props.model,
  rules: props.rules,
  labelWidth: props.labelWidth,
  labelPosition: props.labelPosition,
  addField: (field: FormItemContext) => {
    fields.value.push(field);
  },
  removeField: (ctx: FormItemContext) => {
    if (ctx.field) {
      fields.value = fields.value.filter(item => item !== ctx);
    }
  }
});

provide('formContext', formContext);

const validateField = async (ctx: FormItemContext) => {
  if (!ctx.field) return true;
  
  const rules = ctx.getRules?.() || (props.rules && props.rules[ctx.field]);
  if (!rules) return true;

  const schema = new Schema({ [ctx.field]: rules });
  try {
    await schema.validate({ [ctx.field]: props.model[ctx.field] });
    ctx.updateError('');
    return true;
  } catch (errors: any) {
    ctx.updateError(errors.errors[0].message);
    return false;
  }
};

const validate = async () => {
  const validateResults = await Promise.all(
    fields.value.map(field => validateField(field))
  );
  return !validateResults.includes(false);
};

const clearValidate = (props?: string[]) => {
  fields.value.forEach(item => {
    if (!props || !item.field || props.includes(item.field)) {
      item.clearValidate();
    }
  });
};

const resetFields = () => {
  if (!props.model) return;
  fields.value.forEach(item => {
    if (item.field) {
      props.model[item.field] = '';
      item.clearValidate();
    }
  });
};

defineExpose({
  validate,
  clearValidate,
  resetFields
});
</script>
