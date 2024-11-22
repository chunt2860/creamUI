import _image from "./src/image.vue";

export const Image = _image;

export * from "./src/props";
export * from "./src/types";
export type ImageInstance = InstanceType<typeof Image>;
export default Image;
