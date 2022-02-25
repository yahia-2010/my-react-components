import React from "react";
import { absolutePositions } from "../../global/types/types";
import { StylingInterface } from "../../global/interfaces/stylingInterface";
import {
  bgGenerator,
  textColorGenerator,
  roundnessGenerator,
  shadowGenerator,
  boredGenerator,
} from "../../global/generators/generators";
import {
  sizeGenerator,
  positionGenerator,
} from "./FloatingButtonStylesGenerator";
import "./FloatingButton.css";

export interface FloatingButtonProps {
  position?: absolutePositions;
  styling?: StylingInterface;
  func?: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({
  position,
  children,
  styling,
  func,
}) => {
  const generatedSize = sizeGenerator(styling?.size);
  const generatedBg = bgGenerator(styling?.bg);
  const generatedTextColor = textColorGenerator(styling?.textColor);
  const generatedRoundness = roundnessGenerator(styling?.roundness);
  const generatedShadow = shadowGenerator(styling?.shadow);
  const generatedBorder = boredGenerator(styling?.border);
  const generatedPosition = positionGenerator(position);

  return (
    <button
      className="floatingButton"
      onClick={func}
      style={{
        ...generatedBg,
        ...generatedBorder,
        ...generatedRoundness,
        ...generatedShadow,
        ...generatedSize,
        ...generatedTextColor,
        ...generatedPosition,
      }}
    >
      {children}
    </button>
  );
};

export default FloatingButton;
