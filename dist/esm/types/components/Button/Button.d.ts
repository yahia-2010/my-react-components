import React from "react";
import { StylingInterface } from "../../global/interfaces/stylingInterface";
import "./Button.css";
export interface ButtonProps {
    func?: () => void;
    styling?: StylingInterface;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
