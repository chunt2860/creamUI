import _avatar from "./src/avatar.vue";

export const Avatar = _avatar;

export * from "./src/props";
export * from "./src/types";

export type AvatarInstance = InstanceType<typeof Avatar>;
export default Avatar;
