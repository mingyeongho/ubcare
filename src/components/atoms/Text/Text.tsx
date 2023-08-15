"use client";

import theme, { ColorType, TypoType } from "@/styles/theme";
import { styled } from "styled-components";

interface Props {
  label: string | number;
  typo: TypoType;
  color: ColorType;
  is_underline?: boolean;
}

const Text = ({ label, typo, color, is_underline = false }: Props) => {
  return (
    <Index $typo={typo} color={color} $is_underline={is_underline}>
      {label}
    </Index>
  );
};

export default Text;

const Index = styled.span<{
  $typo: TypoType;
  color: ColorType;
  $is_underline: boolean;
}>`
  ${({ $typo }) => theme.typo[$typo]}
  color: ${({ color }) => theme.color[color]};
  text-decoration: ${({ $is_underline }) => $is_underline && "underline"};
`;
