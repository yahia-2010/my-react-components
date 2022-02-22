import React from 'react';

interface StylingInterface {
}

declare type sizes = "sm" | "md" | "lg" | "xl";

interface ButtonProps {
    label: string;
    styling?: StylingInterface;
    func?: (params: any) => void | any;
    size?: sizes;
    bg?: string;
    textColor?: string;
}
declare const Button: React.FC<ButtonProps>;

export { Button };
