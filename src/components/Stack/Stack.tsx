import React from "react";
import { StylingInterface } from "../../global/interfaces/stylingInterface";
import { stylesGenerator } from "../../global/generators/stylesGenerator";
import {
  directions,
  numberSizes,
  sizedColor,
  borderType,
  numberSizesFull,
} from "../../global/types/types";
import {
  directionGenerator,
  wrapGenerator,
  gapGenerator,
} from "./StackStylesGenerator";
import "./Stack.css";

export interface StackProps {
  border?: borderType;
  width?: numberSizesFull;
  textColor?: string;
  bg?: string;
  roundness?: numberSizes;
  shadow?: sizedColor;
  direction?: directions;
  wrap?: boolean;
  gap?: numberSizes;
  centering?: boolean;
}

const Stack: React.FC<StackProps> = ({
  children,
  direction,
  wrap,
  gap,
  border,
  roundness,
  shadow,
  bg,
  textColor,
  width,
  centering,
}) => {
  const styling: StylingInterface = {
    border,
    textColor,
    bg,
    roundness,
    shadow,
    width,
    centering,
  };
  const generatedDirection = directionGenerator(direction);
  const generatedWrap = wrapGenerator(wrap);
  const generatedStyles = stylesGenerator(styling!);
  const generatedGap = gapGenerator(gap);
  return (
    <div
      className="stack"
      style={{
        ...generatedDirection,
        ...generatedWrap,
        ...generatedStyles,
        ...generatedGap,
      }}
    >
      {children}
    </div>
  );
};

export default Stack;
