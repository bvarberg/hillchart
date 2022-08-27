import { ComponentMeta, ComponentStory } from "@storybook/react";
import { HillChart } from "./HillChart";

export default {
  title: "HillChart",
  component: HillChart,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof HillChart>;

const Template: ComponentStory<typeof HillChart> = (args) => (
  <HillChart {...args} />
);

export const Example = Template.bind({});
Example.args = {
  snapshot: {
    captured: new Date(),
    data: [
      {
        id: "first",
        label: "Early days",
        progress: 0.15,
      },
      {
        id: "second",
        label: "Progressing well",
        progress: 0.75,
      },
    ],
  },
};
