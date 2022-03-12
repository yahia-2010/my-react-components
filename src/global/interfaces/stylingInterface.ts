import {
  sizes,
  sizedColor,
  borderType,
  numberSizesFull,
  numberSizes,
} from "../types/types";

export interface StylingInterface {
  size?: sizes;
  bgColor?: string;
  shadow?: sizedColor;
  border?: borderType;
  textColor?: string;
  roundness?: numberSizesFull;
  width?: numberSizesFull;
  centering?: boolean;
  gap?: numberSizes;
}
