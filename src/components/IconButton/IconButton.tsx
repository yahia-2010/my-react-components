import React, { ReactElement } from "react";
import { StylingInterface } from "../../global/interfaces/stylingInterface";
import { stylesGenerator } from "../../global/generators/generators";
import { sizeGenerator } from "./IconButtonStylesGenerator";
import "./IconButton.css";

export interface IconButtonProps {
  icon: ReactElement;
  func?: () => void;
  styling?: StylingInterface;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, func, styling }) => {
  const generatedSize = sizeGenerator(styling?.size);
  const generatedStyles = stylesGenerator(styling!, ["roundness"]);
  return (
    <button
      onClick={func}
      style={{
        ...generatedStyles,
        ...generatedSize,
      }}
      className="IconButton"
    >
      {icon}
    </button>
  );
};

export default IconButton;
