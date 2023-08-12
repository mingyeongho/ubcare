import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    // Initialize config.resolve if not already defined
    config.resolve = config.resolve || {};

    // Initialize config.resolve.alias if not already defined
    config.resolve.alias = config.resolve.alias || {};

    // Set the alias
    config.resolve.alias["@"] = path.resolve(__dirname, "../src/");

    // Return the modified config
    return config;
  },
};
export default config;
