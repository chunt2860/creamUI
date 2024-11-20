import _pagination from "./src/pagination.vue";

export const Pagination = _pagination;

export * from "./src/props";
export * from "./src/types";

export type PaginationInstance = InstanceType<typeof Pagination>;
export default Pagination;
