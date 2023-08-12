import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ShadowBox from "./ShadowBox";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/atoms/ShadowBox",
  component: ShadowBox,
} as ComponentMeta<typeof ShadowBox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ShadowBox> = (args) => (
  <ShadowBox {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  borderRadius: 16,
  py: 48,
  px: 48,
  shadow: "normal",
};
