import { ExtractPropTypes } from "vue";
import { modalProps } from "./props";

export type ModalType = "info" | "success" | "warning" | "error" | "confirm";

export type ModalInstance = string | ModalItem;

export type ModalMethod = {};

export type ModalItem = ExtractPropTypes<typeof modalProps & ModalMethod>;
