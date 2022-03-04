import React from "react";
import { stylesGenerator } from "../../global/generators/stylesGenerator";
import { StylingInterface } from "../../global/interfaces/stylingInterface";
import {
  borderType,
  numberSizes,
  numberSizesFull,
  sizedColor,
} from "../../global/types/types";

export interface GridProps {
  border?: borderType;
  width?: numberSizesFull;
  textColor?: string;
  bg?: string;
  roundness?: numberSizes;
  shadow?: sizedColor;
  gap?: numberSizes;
  centering?: boolean;
  cells?: number;
  columns?: number;
  rows?: number;
}

const Grid: React.FC<GridProps> = ({
  children,
  gap,
  border,
  roundness,
  shadow,
  bg,
  textColor,
  width,
  centering,
  cells,
  columns,
  rows,
}) => {
  const styling: StylingInterface = {
    border,
    textColor,
    bg,
    roundness,
    shadow,
    width,
    centering,
    gap,
  };
  const generatedStyles = stylesGenerator(styling!, [], { bg: "transparent" });
  return (
    <div
      className="stack"
      style={{
        ...generatedStyles,
      }}
    >
      {children}
    </div>
  );
};

export default Grid;
