import { coords } from "../interfaces/coordsInterfaces";

export type directions = "vertical" | "horizontal";

export type sizes = "sm" | "md" | "lg" | "xl";

export type hPositions = "top" | "bottom";

export type vPosition = "left" | "right";

export type positions = "top" | "bottom" | "left" | "right";

export type doublePositions = `${hPositions} ${vPosition}`;

export type absolutePositions = doublePositions | coords;

export type numberSizes = sizes | number;

export type borderStyles =
  | "solid"
  | "dotted"
  | "dashed"
  | "double"
  | "groove"
  | "ridge"
  | "inset"
  | "outset";

export type stringStyle = string | undefined;

export type sizedColor = { size: sizes; color: string };

export type numberSizedColor = {
  size: numberSizes;
  color: string;
};

export type borderType = {
  size: numberSizes;
  color: string;
  style: borderStyles;
};
