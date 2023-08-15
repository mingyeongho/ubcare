import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import GridContainer from "./GridContainer";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/molecules/GridContainer",
  component: GridContainer,
} as ComponentMeta<typeof GridContainer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof GridContainer> = (args) => (
  <GridContainer {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
