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
declare const Button: React.FC<ButtonProps>;
export default Button;
