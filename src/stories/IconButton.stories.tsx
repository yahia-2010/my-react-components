import { IconButton } from "../components";

export default {
  title: "MyReactComponents/Buttons/IconButton",
  component: IconButton,
};

// Template
const Template: any = (args: object) => (
  <IconButton {...args} icon={<p>A</p>} />
);

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

// Background & Text color

export const DarkIconButton = Template.bind({});
DarkIconButton.args = {
  bgColor: "#393e41",
  textColor: "#fff",
};

export const LightIconButton = Template.bind({});
LightIconButton.args = {
  bgColor: "#fbefb",
  textColor: "#000",
};

// Borders

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

export const BorderDotted = Template.bind({});
BorderDotted.args = {
  border: { size: "sm", color: "#000", style: "dotted" },
};

export const BorderDashed = Template.bind({});
BorderDashed.args = {
  border: { size: "sm", color: "#000", style: "dashed" },
};

export const BorderDouble = Template.bind({});
BorderDouble.args = {
  border: { size: "sm", color: "#000", style: "double" },
};

export const BorderGroove = Template.bind({});
BorderGroove.args = {
  border: { size: "sm", color: "#eee", style: "groove" },
};

export const BorderRidge = Template.bind({});
BorderRidge.args = {
  border: { size: "sm", color: "#eee", style: "ridge" },
};

export const BorderInset = Template.bind({});
BorderInset.args = {
  border: { size: "sm", color: "#eee", style: "inset" },
};

export const BorderOutset = Template.bind({});
BorderOutset.args = {
  border: { size: "sm", color: "#eee", style: "outset" },
};
