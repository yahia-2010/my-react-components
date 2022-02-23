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
export const RoundSm = () => (
  <Button roundness="sm" size="md">
    Hello Button!
  </Button>
);
export const RoundMd = () => (
  <Button roundness="md" size="md">
    Hello Button!
  </Button>
);
export const RoundLg = () => (
  <Button roundness="lg" size="md">
    Hello Button!
  </Button>
);

export const RoundXl = () => (
  <Button roundness="xl" size="md">
    Hello Button!
  </Button>
);
export const RoundByNumber = () => (
  <Button roundness={5} size="md">
    Hello Button
  </Button>
);

// Shadows

export const ShadowSm = () => (
  <Button size="md" shadow={{ size: "sm", color: "#eee" }}>
    Hello Button!
  </Button>
);

export const ShadowMd = () => (
  <Button size="md" shadow={{ size: "md", color: "#eee" }}>
    Hello Button!
  </Button>
);

export const ShadowLg = () => (
  <Button size="md" shadow={{ size: "lg", color: "#eee" }}>
    Hello Button!
  </Button>
);

export const ShadowXl = () => (
  <Button size="md" shadow={{ size: "xl", color: "#eee" }}>
    Hello Button!
  </Button>
);

// BG & text colors

export const DarkButton = () => (
  <Button size="md" bg="#393e41" textColor="#fff">
    Hello Button!
  </Button>
);

export const LightButton = () => (
  <Button size="md" bg="#fbefb" textColor="#000">
    Hello Button!
  </Button>
);
