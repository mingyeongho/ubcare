import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import OneButtonModal from "./OneButtonModal";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "modals/OneButtonModal",
  component: OneButtonModal,
} as ComponentMeta<typeof OneButtonModal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof OneButtonModal> = (args) => (
  <OneButtonModal {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: "아이디/비밀번호를 확인해 주세요.",
  contents: [
    "현재 입력하신 정보가 확인되지 않습니다.",
    "계속 로그인 오류가 생긴다면, 관리자에게 확인 요청해 주세요.",
  ],
  buttonLabel: "확인",
};
