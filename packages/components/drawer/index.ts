import _drawer from "./src/drawer.vue";

export const Drawer = _drawer;

export * from "./src/props";

export type DrawerInstance = InstanceType<typeof Drawer>;
export default Drawer;
