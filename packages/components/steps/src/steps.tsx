import { getAllElements } from "@birdpaper-ui/components/utils/dom";
import { useNamespace } from "@birdpaper-ui/hooks/src/use-namespace";
import { defineComponent, Fragment, h, Comment, mergeProps, PropType } from "vue";
import { get } from "radash";

export default defineComponent({
  name: "Steps",
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
    /**
     * @type StepsType
     * @description The type of direction.
     * @default "horizontal"
     */
    type: { type: String as PropType<"vertical" | "horizontal">, default: "horizontal" },
  },
  setup(props, { slots }) {
    const { clsBlockName } = useNamespace("steps");
    const { clsBlockName: itemClsBlockName } = useNamespace("step");

    const render = () => {
      const children = getAllElements(slots.default?.(), false).filter((item) => get(item, "type") !== Comment);

      return (
        <div class={[clsBlockName, { [`${clsBlockName}-${props.type}`]: props.type }]}>
          {children.map((child, index) => {
            const step = Object.assign({}, child);

            const isFinished = props.modelValue > index;
            const isActive = props.modelValue === index;
            const status = isFinished ? "finish" : isActive ? "process" : "wait";

            step.props = child.props
              ? mergeProps(child.props, { index, status, type: props.type })
              : { index, status, type: props.type };
            return (
              <Fragment key={child.key ?? `item-${index}`}>
                <div class={[`${clsBlockName}-item`, `${itemClsBlockName}-${status}`]}>{h(step, {})}</div>
              </Fragment>
            );
          })}
        </div>
      );
    };

    return render;
  },
});
