import { getAllElements } from "@birdpaper-ui/components/utils/dom";
import { useNamespace } from "@birdpaper-ui/hooks/src/use-namespace";
import { defineComponent, Fragment, h, Comment, mergeProps } from "vue";
import { get } from "radash";

export default defineComponent({
  name: "Steps",
  props: {},
  setup(props, { slots }) {
    const { clsBlockName } = useNamespace("steps");

    const render = () => {
      const children = getAllElements(slots.default?.(), false).filter((item) => get(item, "type") !== Comment);

      return (
        <div class={[clsBlockName]}>
          {children.map((child, index) => {
            const step = Object.assign({}, child);
            step.props = child.props ? mergeProps(child.props, { index }) : { index };

            return (
              <Fragment key={child.key ?? `item-${index}`}>
                <div class={`${clsBlockName}-item`}>{h(step, {})}</div>
              </Fragment>
            );
          })}
        </div>
      );
    };

    return render;
  },
});
