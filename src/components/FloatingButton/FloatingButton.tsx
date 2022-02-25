import React from "react";
import { absolutePositions } from "../../global/types/types";
import { StylingInterface } from "../../global/interfaces/stylingInterface";
import { stylesGenerator } from "../../global/generators/generators";
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
  const generatedStyles = stylesGenerator(styling!);
  const generatedPosition = positionGenerator(position);

  return (
    <button
      className="floatingButton"
      onClick={func}
      style={{
        ...generatedPosition,
        ...generatedStyles,
        ...generatedSize,
      }}
    >
      {children}
    </button>
  );
};

export default FloatingButton;
