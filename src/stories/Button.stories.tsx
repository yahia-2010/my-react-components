import { Button } from "../components";

export default {
  title: "Button",
  component: Button,
};

// Sizes
export const Small = () => <Button size="sm">Hello Button!</Button>;
export const Medium = () => <Button size="md">Hello Button!</Button>;
export const Large = () => <Button size="lg">Hello Button!</Button>;
export const XLarge = () => <Button size="xl">Hello Button!</Button>;

// Roundness
export const RoundSm = () => <Button roundness="sm">Hello Button!</Button>;
export const RoundMd = () => <Button roundness="md">Hello Button!</Button>;
export const RoundLg = () => <Button roundness="lg">Hello Button!</Button>;
export const RoundXl = () => <Button roundness="xl">Hello Button!</Button>;
export const RoundByNumber = () => <Button roundness={5}>Hello Button</Button>;

// Shadows

export const ShadowSm = () => (
  <Button shadow={{ size: "sm", color: "#eee" }}>Hello Button!</Button>
);

export const ShadowMd = () => (
  <Button shadow={{ size: "md", color: "#eee" }}>Hello Button!</Button>
);

export const ShadowLg = () => (
  <Button shadow={{ size: "lg", color: "#eee" }}>Hello Button!</Button>
);

export const ShadowXl = () => (
  <Button shadow={{ size: "xl", color: "#eee" }}>Hello Button!</Button>
);

// BG & text colors

export const DarkButton = () => (
  <Button bg="#393e41" textColor="#fff">
    Hello Button!
  </Button>
);

export const LightButton = () => (
  <Button bg="#fbefb" textColor="#000">
    Hello Button!
  </Button>
);

// Border

export const BorderSolidSm = () => (
  <Button border={{ size: "sm", color: "#000", style: "solid" }}>
    Hello Button!
  </Button>
);

export const BorderSolidMd = () => (
  <Button border={{ size: "md", color: "#000", style: "solid" }}>
    Hello Button!
  </Button>
);

export const BorderSolidLg = () => (
  <Button border={{ size: "lg", color: "#000", style: "solid" }}>
    Hello Button!
  </Button>
);

export const BorderSolidXl = () => (
  <Button border={{ size: "xl", color: "#000", style: "solid" }}>
    Hello Button!
  </Button>
);

export const BorderSolidByNumber = () => (
  <Button border={{ size: 1.5, color: "#000", style: "solid" }}>
    Hello Button!
  </Button>
);

export const BorderDotted = () => (
  <Button border={{ size: "md", color: "#000", style: "dotted" }}>
    Hello Button!
  </Button>
);

export const BorderDashed = () => (
  <Button border={{ size: "md", color: "#000", style: "dashed" }}>
    Hello Button!
  </Button>
);

export const BorderDouble = () => (
  <Button border={{ size: "md", color: "#000", style: "double" }}>
    Hello Button!
  </Button>
);

export const BorderGroove = () => (
  <Button border={{ size: "md", color: "#eee", style: "groove" }}>
    Hello Button!
  </Button>
);

export const BorderRidge = () => (
  <Button border={{ size: "md", color: "#eee", style: "ridge" }}>
    Hello Button!
  </Button>
);

export const BorderInset = () => (
  <Button border={{ size: "md", color: "#eee", style: "inset" }}>
    Hello Button!
  </Button>
);

export const BorderOutset = () => (
  <Button border={{ size: "md", color: "#eee", style: "outset" }}>
    Hello Button!
  </Button>
);
