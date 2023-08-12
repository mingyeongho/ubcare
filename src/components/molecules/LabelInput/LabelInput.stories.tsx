import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LabelInput from "./LabelInput";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/molecules/LabelInput",
  component: LabelInput,
  tags: ["autodocs"],
} as ComponentMeta<typeof LabelInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LabelInput> = (args) => (
  <LabelInput {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "Example",
  gap: 8,
  name: "example",
  py: 15,
  px: 19,
};
