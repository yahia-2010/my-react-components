import React from "react";
import { StylingInterface } from "../../global/interfaces/stylingInterface";
import { sizes } from "../../global/types/types";
import { sizeGenerator } from "./ButtonGenerators";
import "./Button.css";

export interface ButtonProps {
  label: string;
  styling?: StylingInterface;
  func?: (params: any) => void;
  size?: sizes;
  bg?: string;
  textColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  styling,
  func,
  size,
  bg,
  textColor,
}) => {
  const generatedSize = sizeGenerator(size);

  return (
    <button onClick={func} style={{ padding: generatedSize }}>
      {label}
    </button>
  );
};

export default Button;
