import React from "react";
import { StylingInterface } from "../../global/interfaces/stylingInterface";
import { stylesGenerator } from "../../global/generators/generators";
import { directions } from "../../global/types/types";
import { directionGenerator, wrapGenerator } from "./StackStylesGenerator";

interface StackProps {
  styling: StylingInterface;
  direction: directions;
  wrap: boolean;
}

const Stack: React.FC<StackProps> = ({
  children,
  styling,
  direction,
  wrap,
}) => {
  const generatedDirection = directionGenerator(direction);
  const generatedWrap = wrapGenerator(wrap);
  const generatedStyles = stylesGenerator(styling!);

  return (
    <div
      style={{ ...generatedDirection, ...generatedWrap, ...generatedStyles }}
    >
      {children}
    </div>
  );
};

export default Stack;
