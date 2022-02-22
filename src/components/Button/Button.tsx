import React from "react";
import { StylingInterface } from "../../global/interfaces/stylingInterface";
import { sizes } from "../../global/types/types";
import "./Button.css";

export interface ButtonProps {
  label: string;
  styling?: StylingInterface;
  func?: (params: any) => void | any;
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
  return <button onClick={func}>{label}</button>;
};

export default Button;
