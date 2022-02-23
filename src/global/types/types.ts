export type sizes = "sm" | "md" | "lg" | "xl";

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
