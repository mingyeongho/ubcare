import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DashboardDetailEMR from "./DashboardDetailEMR";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/organisms/DashboardDetailEMR",
  component: DashboardDetailEMR,
} as ComponentMeta<typeof DashboardDetailEMR>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DashboardDetailEMR> = (args) => (
  <DashboardDetailEMR {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
