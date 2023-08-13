import { css } from "styled-components";

const theme = {
  color: {
    white: "#FFF",
    gray1: "#333",
    gray2: "#4F4F4F",
    gray3: "#828282",
    gray4: "#bdbdbd",
    blue1: "#007AFF",
  },

  shadow: {
    normal: "0px 8px 16px 0px rgba(0, 0, 0, 0.20)",
  },

  typo: {
    bold: css`
      font-weight: 700;
      font-size: 26px;
    `,
    bold2: css`
      font-weight: 700;
      font-size: 16px;
    `,
    thin: css`
      font-weight: 400;
      font-size: 16px;
    `,
    xthin: css`
      font-weight: 400;
      font-size: 14px;
    `,
  },
};

export type ColorType = keyof typeof theme.color;
export type ShadowType = keyof typeof theme.shadow;
export type TypoType = keyof typeof theme.typo;

export default theme;
