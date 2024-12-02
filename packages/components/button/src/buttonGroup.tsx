import { useNamespace } from "@birdpaper-ui/hooks";
import { computed, defineComponent, Fragment, h, mergeProps, PropType } from "vue";
import { ButtonShape, ButtonSize, ButtonStatus, ButtonType } from "./types";
import { getAllElements } from "@birdpaper-ui/components/utils/dom";
import { get } from "radash";

export default defineComponent({
  name: "ButtonGroup",
  props: {
    type: {
      type: String as PropType<ButtonType>,
      default: "normal",
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: "default",
    },
    shape: {
      type: String as PropType<ButtonShape>,
      default: "square",
    },
    status: {
      type: String as PropType<ButtonStatus>,
      default: "gary",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    const { clsBlockName } = useNamespace("button-group");

    const cls = computed(() => {
      let clsName = [clsBlockName];

      return clsName;
    });

    const render = () => {
      const children = getAllElements(slots.default?.(), true).filter((item) => get(item, "type.name") === "Button");

      return (
        <div class={cls.value}>
          {children.map((child, index) => {
            const button = Object.assign({}, child);
            button.props = child.props ? mergeProps(child.props, { ...props }) : { ...props };
            return <Fragment key={child.key ?? `item-${index}`}>{h(button, {})}</Fragment>;
          })}
        </div>
      );
    };

    return render;
  },
});
