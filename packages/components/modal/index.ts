import _modal from "./src/modal.vue";

export const Modal = _modal;

export * from "./src/props";

export type ModalInstance = InstanceType<typeof Modal>;
export default Modal;
