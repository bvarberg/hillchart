import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ReactElement } from "react";
import { Milestone } from "./Milestone";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "System/Milestone",
  component: Milestone,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  // },
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
} as ComponentMeta<typeof Milestone>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Milestone> = (args) => (
  <SVGCanvas>
    <Milestone {...args} />
  </SVGCanvas>
);

export const Small = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Small.args = {
  centerPoint: {
    x: 50,
    y: 50,
  },
  radius: 20,
};

interface SVGCanvasProps {
  height?: number;
  width?: number;
  showBorder?: boolean;
  children?: ReactElement;
}

function SVGCanvas({
  height = 100,
  width = 100,
  showBorder = true,
  children,
}: SVGCanvasProps) {
  return (
    <svg
      height={height}
      style={
        showBorder
          ? {
              border: "1px dashed #ccc",
            }
          : undefined
      }
      viewBox={`0 0 ${width} ${height}`}
      width={width}
    >
      {children}
    </svg>
  );
}
