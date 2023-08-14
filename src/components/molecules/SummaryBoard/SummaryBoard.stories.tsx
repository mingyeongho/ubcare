import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SummaryBoard from "./SummaryBoard";
import icons from "@/styles/icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/molecules/SummaryBoard",
  component: SummaryBoard,
  tags: ["autodocs"],
} as ComponentMeta<typeof SummaryBoard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SummaryBoard> = (args) => (
  <SummaryBoard {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  icon: icons.cancel,
  title: "연동 의원수",
  subTitle: "현재 기준",
  value: 120,
  unit: "num",
  fluctuation: 100,
};
