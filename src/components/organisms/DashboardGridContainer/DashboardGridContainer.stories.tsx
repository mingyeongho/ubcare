import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DashboardGridContainer from "./DashboardGridContainer";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/organisms/DashboardGridContainer",
  component: DashboardGridContainer,
} as ComponentMeta<typeof DashboardGridContainer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DashboardGridContainer> = (args) => (
  <DashboardGridContainer {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
