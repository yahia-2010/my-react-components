import { Stack } from "../components";

export default {
  title: "MyReactComponents/Containers/Stack",
  component: Stack,
  argTypes: {
    children: {
      type: "number",
      defaultValue: 4,
    },
  },
};

// Template
const Template: any = (args: any) => (
  <Stack {...args}>
    {[...Array(args.children)].map((n) => (
      <div
        style={{
          width: "2rem",
          height: "2rem",
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {n}
      </div>
    ))}
  </Stack>
);

// Directions

export const Vertical = Template.bind({});
Vertical.args = {
  direction: "vertical",
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: "horizontal",
};

// Wrap

export const Wrap = Template.bind({});
Wrap.args = {
  wrap: true,
  children: 35,
};

export const NoWrap = Template.bind({});
NoWrap.args = {
  wrap: false,
  children: 35,
};

// Gap

export const GapSm = Template.bind({});
GapSm.args = {
  gap: "sm",
};

export const GapMd = Template.bind({});
GapMd.args = {
  gap: "md",
};

export const GapLg = Template.bind({});
GapLg.args = {
  gap: "lg",
};

export const GapXl = Template.bind({});
GapXl.args = {
  gap: "xl",
};

export const GapByNumber = Template.bind({});
GapByNumber.args = {
  gap: 100,
};

// Width

export const WidthSm = Template.bind({});
WidthSm.args = {
  width: "sm",
  bg: "#eee",
};

export const WidthMd = Template.bind({});
WidthMd.args = {
  width: "md",
  bg: "#eee",
};

export const WidthLg = Template.bind({});
WidthLg.args = {
  width: "lg",
  bg: "#eee",
};

export const WidthXl = Template.bind({});
WidthXl.args = {
  width: "xl",
  bg: "#eee",
};

export const WidthFull = Template.bind({});
WidthFull.args = {
  width: "full",
  bg: "#eee",
};

export const WidthByNumber = Template.bind({});
WidthByNumber.args = {
  width: 100,
  bg: "#eee",
};

// Centering

export const Centered = Template.bind({});
Centered.args = {
  centering: true,
};
