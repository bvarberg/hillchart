import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Canvas } from "./ResponsiveHillChart";

export default {
  title: "Responsive",
  component: Canvas,
  parameters: {
    layout: "padded",
  },
} as ComponentMeta<typeof Canvas>;

const Template: ComponentStory<typeof Canvas> = (args) => <Canvas {...args} />;

export const Example = Template.bind({});
Example.args = {};
