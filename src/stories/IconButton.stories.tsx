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

// Background & Text color

export const DarkIconButton = Template.bind({});
DarkIconButton.args = {
  styling: { bg: "#393e41", textColor: "#fff" },
};

export const LightIconButton = Template.bind({});
LightIconButton.args = {
  styling: { bg: "#fbefb", textColor: "#000" },
};

// Borders

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

export const BorderDotted = Template.bind({});
BorderDotted.args = {
  styling: { border: { size: "sm", color: "#000", style: "dotted" } },
};

export const BorderDashed = Template.bind({});
BorderDashed.args = {
  styling: { border: { size: "sm", color: "#000", style: "dashed" } },
};

export const BorderDouble = Template.bind({});
BorderDouble.args = {
  styling: { border: { size: "sm", color: "#000", style: "double" } },
};

export const BorderGroove = Template.bind({});
BorderGroove.args = {
  styling: { border: { size: "sm", color: "#eee", style: "groove" } },
};

export const BorderRidge = Template.bind({});
BorderRidge.args = {
  styling: { border: { size: "sm", color: "#eee", style: "ridge" } },
};

export const BorderInset = Template.bind({});
BorderInset.args = {
  styling: { border: { size: "sm", color: "#eee", style: "inset" } },
};

export const BorderOutset = Template.bind({});
BorderOutset.args = {
  styling: { border: { size: "sm", color: "#eee", style: "outset" } },
};
