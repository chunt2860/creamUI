import _tag from "./src/tag.vue";

export const Tag = _tag;

export * from "./src/props";
export * from "./src/types";

export type TagInstance = InstanceType<typeof Tag>;
export default Tag;
