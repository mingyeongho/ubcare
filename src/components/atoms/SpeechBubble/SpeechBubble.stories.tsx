import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SpeechBubble from "./SpeechBubble";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/atoms/SpeechBubble",
  component: SpeechBubble,
} as ComponentMeta<typeof SpeechBubble>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SpeechBubble> = (args) => (
  <SpeechBubble {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: `[ 이용권 금액 (Vat포함) ]
Event 0원
Basic 19,900원
Standard 129,800원`,
};
