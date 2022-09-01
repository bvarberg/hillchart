import { ComponentMeta, ComponentStory } from "@storybook/react";
import { datapointFactory } from "../../../pkg/testing/factories/datapoint";
import { snapshotFactory } from "../../../pkg/testing/factories/snapshot";
import { HillChart } from "./HillChart";

export default {
  title: "Hill Chart",
  component: HillChart,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof HillChart>;

const Template: ComponentStory<typeof HillChart> = (args) => (
  <HillChart {...args} />
);

export const Consistent = Template.bind({});
Consistent.args = {
  snapshot: snapshotFactory.build({
    data: [
      datapointFactory.build({
        label: "Early days",
        progress: 0.15,
      }),
      datapointFactory.build({
        label: "Progressing well",
        progress: 0.75,
      }),
    ],
  }),
};

export const Randomized = Template.bind({});
Randomized.args = {
  snapshot: snapshotFactory.build(),
};
