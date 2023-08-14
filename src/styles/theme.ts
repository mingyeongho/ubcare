import { css } from "styled-components";

const theme = {
  color: {
    white: "#FFF",
    gray1: "#333",
    gray2: "#4F4F4F",
    gray3: "#828282",
    gray4: "#bdbdbd",
    gray5: "#F2F2F2",
    gray6: "#878787",
    gray7: "#595959",
    blue1: "#007AFF",
    blue2: "#1D5B79",
    red1: "#EF6262",
  },

  shadow: {
    thin: "0px 4px 8px 0px rgba(0, 0, 0, 0.20)",
    normal: "0px 8px 16px 0px rgba(0, 0, 0, 0.20)",
  },

  typo: {
    bold1: css`
      font-weight: 700;
      font-size: 30px;
    `,
    bold2: css`
      font-weight: 700;
      font-size: 26px;
    `,
    bold3: css`
      font-weight: 700;
      font-size: 20px;
    `,
    bold4: css`
      font-weight: 700;
      font-size: 16px;
    `,
    bold5: css`
      font-weight: 700;
      font-size: 15px;
    `,
    bold6: css`
      font-weight: 700;
      font-size: 14px;
    `,
    bold7: css`
      font-weight: 700;
      font-size: 12px;
    `,
    medium1: css`
      font-weight: 500;
      font-size: 30px;
    `,
    medium2: css`
      font-weight: 500;
      font-size: 26px;
    `,
    medium3: css`
      font-weight: 500;
      font-size: 20px;
    `,
    medium4: css`
      font-weight: 500;
      font-size: 16px;
    `,
    medium5: css`
      font-weight: 500;
      font-size: 15px;
    `,
    medium6: css`
      font-weight: 500;
      font-size: 14px;
    `,
    medium7: css`
      font-weight: 500;
      font-size: 12px;
    `,
    regular1: css`
      font-weight: 400;
      font-size: 30px;
    `,
    regular2: css`
      font-weight: 400;
      font-size: 26px;
    `,
    regular3: css`
      font-weight: 400;
      font-size: 20px;
    `,
    regular4: css`
      font-weight: 400;
      font-size: 16px;
    `,
    regular5: css`
      font-weight: 400;
      font-size: 15px;
    `,
    regular6: css`
      font-weight: 400;
      font-size: 14px;
    `,
    regular7: css`
      font-weight: 400;
      font-size: 12px;
    `,
  },
};

export type ColorType = keyof typeof theme.color;
export type ShadowType = keyof typeof theme.shadow;
export type TypoType = keyof typeof theme.typo;

export default theme;
