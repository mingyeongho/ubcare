"use client";

import theme, { ColorType, TypoType } from "@/styles/theme";
import { styled } from "styled-components";

export type TextStyleProps = {
  $typo: TypoType;
  $color: ColorType;
  $is_underline?: boolean;
};

export type TextProps = TextStyleProps & {
  label: string | number;
};

const Text = ({ label, ...props }: TextProps) => {
  return <Index {...props}>{label}</Index>;
};

export default Text;

const Index = styled.span<TextStyleProps>`
  ${({ $typo }) => theme.typo[$typo]}
  color: ${({ $color }) => theme.color[$color]};
  text-decoration: ${({ $is_underline }) => $is_underline && "underline"};
`;
