import { Button } from "../components";

export default {
  title: "MyReactComponents/Buttons/Button",
  component: Button,
  argTypes: { func: { action: "handleClick" } },
};

// Template

const Template: any = (args: object) => (
  <Button {...args}>Hello Button!</Button>
);

// Sizes

export const Small = Template.bind({});
Small.args = {
  styling: { size: "sm" },
};

export const Medium = Template.bind({});
Medium.args = {
  styling: { size: "md" },
};

export const Large = Template.bind({});
Large.args = {
  styling: { size: "lg" },
};

export const XLarge = Template.bind({});
XLarge.args = {
  styling: { size: "xl" },
};

// Roundness

export const RoundSm = Template.bind({});
RoundSm.args = {
  styling: { roundness: "sm" },
};

export const RoundMd = Template.bind({});
RoundMd.args = {
  styling: { roundness: "md" },
};

export const RoundLg = Template.bind({});
RoundLg.args = {
  styling: { roundness: "lg" },
};

export const RoundXl = Template.bind({});
RoundXl.args = {
  styling: { roundness: "xl" },
};

export const RoundFull = Template.bind({});
RoundFull.args = {
  styling: { roundness: "full" },
};

export const RoundByNumber = Template.bind({});
RoundByNumber.args = {
  styling: { roundness: 30 },
};

// Shadows

export const ShadowSm = Template.bind({});
ShadowSm.args = {
  styling: { shadow: { size: "sm", color: "#eee" } },
};

export const ShadowMd = Template.bind({});
ShadowMd.args = {
  styling: { shadow: { size: "md", color: "#eee" } },
};

export const ShadowLg = Template.bind({});
ShadowLg.args = {
  styling: { shadow: { size: "lg", color: "#eee" } },
};

export const ShadowXl = Template.bind({});
ShadowXl.args = {
  styling: { shadow: { size: "xl", color: "#eee" } },
};

// Background & Text colors

export const DarkButton = Template.bind({});
DarkButton.args = {
  styling: { bg: "#393e41", textColor: "#fff" },
};

export const LightButton = Template.bind({});
LightButton.args = {
  styling: { bg: "#fbefb", textColor: "#000" },
};

// Border

export const BorderSolidSm = Template.bind({});
BorderSolidSm.args = {
  styling: { border: { size: "sm", color: "#000", style: "solid" } },
};

export const BorderSolidMd = Template.bind({});
BorderSolidMd.args = {
  styling: { border: { size: "md", color: "#000", style: "solid" } },
};

export const BorderSolidLg = Template.bind({});
BorderSolidLg.args = {
  styling: { border: { size: "lg", color: "#000", style: "solid" } },
};

export const BorderSolidXl = Template.bind({});
BorderSolidXl.args = {
  styling: { border: { size: "xl", color: "#000", style: "solid" } },
};

export const BorderSolidByNumber = Template.bind({});
BorderSolidByNumber.args = {
  styling: { border: { size: 5, color: "#000", style: "solid" } },
};

export const BorderDotted = Template.bind({});
BorderDotted.args = {
  styling: { border: { size: "md", color: "#000", style: "dotted" } },
};

export const BorderDashed = Template.bind({});
BorderDashed.args = {
  styling: { border: { size: "md", color: "#000", style: "dashed" } },
};

export const BorderDouble = Template.bind({});
BorderDouble.args = {
  styling: { border: { size: "md", color: "#000", style: "double" } },
};

export const BorderGroove = Template.bind({});
BorderGroove.args = {
  styling: { border: { size: "md", color: "#eee", style: "groove" } },
};

export const BorderRidge = Template.bind({});
BorderRidge.args = {
  styling: { border: { size: "md", color: "#eee", style: "ridge" } },
};

export const BorderInset = Template.bind({});
BorderInset.args = {
  styling: { border: { size: "md", color: "#eee", style: "inset" } },
};

export const BorderOutset = Template.bind({});
BorderOutset.args = {
  styling: { border: { size: "md", color: "#eee", style: "outset" } },
};
