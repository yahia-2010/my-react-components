import { sizes, sizedColor, borderType, numberSizes } from "../types/types";

export interface StylingInterface {
  size?: sizes;
  bg?: string;
  shadow?: sizedColor;
  border?: borderType;
  textColor?: string;
  roundness?: numberSizes | "full";
}
