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
