import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DashboardSummaryEMR from "./DashboardSummaryEMR";
import icons from "@/styles/icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/organisms/DashboardSummaryEMR",
  component: DashboardSummaryEMR,
} as ComponentMeta<typeof DashboardSummaryEMR>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DashboardSummaryEMR> = (args) => (
  <DashboardSummaryEMR {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  summaryBoards: [
    {
      icon: icons.humans,
      title: "연동 의원 수",
      subTitle: "현재 기준",
      value: 20,
      unit: "num",
      fluctuation: 15,
    },
    {
      icon: icons.dollars,
      title: "이용권 금액",
      subTitle: "이번달 예상 금액",
      value: 20,
      unit: "won",
      fluctuation: -15,
    },
    {
      icon: icons.comments,
      title: "메시지 발송 금액",
      subTitle: "이번달 예상 금액",
      value: 20,
      unit: "won",
      fluctuation: 15,
    },
  ],
};
