import { Button } from "../components";

export default {
  title: "MyReactComponents/Buttons/Button",
  component: Button,
  argTypes: {
    func: { action: "handleClick" },
    label: { type: "string", defaultValue: "Hello Button!" },
  },
};

// Template

const Template: any = (args: any) => <Button {...args}>{args.label}</Button>;

// Sizes

export const Small = Template.bind({});
Small.args = {
  size: "sm",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "md",
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
};

export const XLarge = Template.bind({});
XLarge.args = {
  size: "xl",
};

// Roundness

export const RoundSm = Template.bind({});
RoundSm.args = {
  roundness: "sm",
};

export const RoundMd = Template.bind({});
RoundMd.args = {
  roundness: "md",
};

export const RoundLg = Template.bind({});
RoundLg.args = {
  roundness: "lg",
};

export const RoundXl = Template.bind({});
RoundXl.args = {
  roundness: "xl",
};

export const RoundFull = Template.bind({});
RoundFull.args = {
  roundness: "full",
};

export const RoundByNumber = Template.bind({});
RoundByNumber.args = {
  roundness: 30,
};

// Shadows

export const ShadowSm = Template.bind({});
ShadowSm.args = {
  shadow: { size: "sm", color: "#eee" },
};

export const ShadowMd = Template.bind({});
ShadowMd.args = {
  shadow: { size: "md", color: "#eee" },
};

export const ShadowLg = Template.bind({});
ShadowLg.args = {
  shadow: { size: "lg", color: "#eee" },
};

export const ShadowXl = Template.bind({});
ShadowXl.args = {
  shadow: { size: "xl", color: "#eee" },
};

// Background & Text colors

export const DarkButton = Template.bind({});
DarkButton.args = {
  bg: "#393e41",
  textColor: "#fff",
};

export const LightButton = Template.bind({});
LightButton.args = {
  bg: "#fbefb",
  textColor: "#000",
};

// Border

export const BorderSolidSm = Template.bind({});
BorderSolidSm.args = {
  border: { size: "sm", color: "#000", style: "solid" },
};

export const BorderSolidMd = Template.bind({});
BorderSolidMd.args = {
  border: { size: "md", color: "#000", style: "solid" },
};

export const BorderSolidLg = Template.bind({});
BorderSolidLg.args = {
  border: { size: "lg", color: "#000", style: "solid" },
};

export const BorderSolidXl = Template.bind({});
BorderSolidXl.args = {
  border: { size: "xl", color: "#000", style: "solid" },
};

export const BorderSolidByNumber = Template.bind({});
BorderSolidByNumber.args = {
  border: { size: 5, color: "#000", style: "solid" },
};

export const BorderDotted = Template.bind({});
BorderDotted.args = {
  border: { size: "md", color: "#000", style: "dotted" },
};

export const BorderDashed = Template.bind({});
BorderDashed.args = {
  border: { size: "md", color: "#000", style: "dashed" },
};

export const BorderDouble = Template.bind({});
BorderDouble.args = {
  border: { size: "md", color: "#000", style: "double" },
};

export const BorderGroove = Template.bind({});
BorderGroove.args = {
  border: { size: "md", color: "#eee", style: "groove" },
};

export const BorderRidge = Template.bind({});
BorderRidge.args = {
  border: { size: "md", color: "#eee", style: "ridge" },
};

export const BorderInset = Template.bind({});
BorderInset.args = {
  border: { size: "md", color: "#eee", style: "inset" },
};

export const BorderOutset = Template.bind({});
BorderOutset.args = {
  border: { size: "md", color: "#eee", style: "outset" },
};
