import React from 'react';

interface StylingInterface {
}

declare type sizes = "sm" | "md" | "lg" | "xl";
declare type numberSizes = sizes | number;
declare type sizedColor = {
    size: sizes;
    color: string;
};

interface ButtonProps {
    label: string;
    styling?: StylingInterface;
    func?: (params: any) => void;
    size?: sizes;
    bg?: string;
    textColor?: string;
    shadow?: sizedColor;
    roundness?: numberSizes;
}
declare const Button: React.FC<ButtonProps>;

export { Button };
