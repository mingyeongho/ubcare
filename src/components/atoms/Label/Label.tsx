"use client";

import theme, { ColorType, TypoType } from "@/styles/theme";
import { styled } from "styled-components";

export type LabelStyleProps = {
  $typo: TypoType;
  $color: ColorType;
};

export type LabelProps = LabelStyleProps & {
  label: string;
  htmlFor: string;
};

const Label = ({ label, htmlFor, ...props }: LabelProps) => {
  return (
    <Index htmlFor={htmlFor} {...props}>
      {label}
    </Index>
  );
};

export default Label;

const Index = styled.label<LabelStyleProps>`
  ${({ $typo }) => theme.typo[$typo]}
  color: ${({ $color }) => theme.color[$color]};
`;
