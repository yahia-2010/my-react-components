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
  bgColor: "#eee",
};

export const WidthMd = Template.bind({});
WidthMd.args = {
  width: "md",
  bgColor: "#eee",
};

export const WidthLg = Template.bind({});
WidthLg.args = {
  width: "lg",
  bgColor: "#eee",
};

export const WidthXl = Template.bind({});
WidthXl.args = {
  width: "xl",
  bgColor: "#eee",
};

export const WidthFull = Template.bind({});
WidthFull.args = {
  width: "full",
  bgColor: "#eee",
};

export const WidthByNumber = Template.bind({});
WidthByNumber.args = {
  width: 100,
  bgColor: "#eee",
};

// Centering

export const Centered = Template.bind({});
Centered.args = {
  centering: true,
};
