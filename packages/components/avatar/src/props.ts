import { ExtractPropTypes, PropType } from "vue";
import { AvatarShape, AvatarSize } from "./types";

export const avatarProps = {
  /**
   * @type string
   * @description Avatar shape.
   * @default "circle"
   */
  shape: {
    type: String as PropType<AvatarShape>,
    default: "circle",
  },
  /**
   * @type string
   * @description Avatar image url.
   */
  imageUrl: {
    type: String,
  },
  /**
   * @type string
   * @description Avatar object fit.
   * @default "cover"
   */
  objectFit: {
    type: String,
    default: "cover",
  },
  /**
   * @type string
   * @description Avatar size.
   * @default "default"
   */
  size: {
    type: [String, Number] as PropType<AvatarSize>,
    default: "default",
  },
};

export type AvatarProps = ExtractPropTypes<typeof avatarProps>;
