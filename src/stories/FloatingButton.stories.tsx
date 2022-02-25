import { FloatingButton } from "../components";

export default {
  title: "MyReactComponents/Buttons/FloatingButton",
  component: FloatingButton,
  argTypes: {
    func: { action: "handleClick" },
    label: { type: "string", defaultValue: "Hello Button!" },
  },
};

// Template
const Template: any = (args: any) => (
  <FloatingButton {...args}>{args.label}</FloatingButton>
);

// Positions

export const BottomRight = Template.bind({});
BottomRight.args = {
  position: "bottom right",
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  position: "bottom left",
};

export const TopLeft = Template.bind({});
TopLeft.args = {
  position: "top left",
};

export const TopRight = Template.bind({});
TopRight.args = {
  position: "top right",
};

export const PositionByNumber = Template.bind({});
PositionByNumber.args = {
  position: { top: 20, left: 100 },
};
