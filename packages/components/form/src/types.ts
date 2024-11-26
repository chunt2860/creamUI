import type { Rule, Rules, Values } from 'async-validator';

export interface FormContext {
  model: Record<string, any>;
  rules?: Rules | Rule;
  labelWidth?: string | number;
  labelPosition?: 'right' | 'left' | 'top';
  addField: (field: FormItemContext) => void;
  removeField: (field: FormItemContext) => void;
}

export interface FormItemContext {
  field?: string;
  validate: () => Promise<Values>;
  clearValidate: () => void;
  updateError: (error: string) => void;
  getRules?: () => Rules | undefined;
}

export interface FormInstance {
  validate: () => Promise<boolean>;
  clearValidate: (props?: string[]) => void;
  resetFields: () => void;
}

export interface FormItemInstance {
  validate: () => Promise<Values>;
  clearValidate: () => void;
}
