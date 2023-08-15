"use client";

import theme, { ColorType, TypoType } from "@/styles/theme";
import { styled } from "styled-components";

interface Props {
  label: string;
  onClick?: () => void;
  isDisabled?: boolean;
  typo: TypoType;
  color: ColorType;
  bgColor: ColorType;
  borderRadius: number;
}

const Button = ({
  label,
  onClick,
  isDisabled = true,
  typo,
  color,
  bgColor,
  borderRadius,
}: Props) => {
  return (
    <Index
      onClick={onClick}
      isDisabled={isDisabled}
      typo={typo}
      color={color}
      bgColor={bgColor}
      style={{ borderRadius }}
    >
      {label}
    </Index>
  );
};

export default Button;

const Index = styled.button<{
  isDisabled: boolean;
  typo: TypoType;
  color: ColorType;
  bgColor: ColorType;
}>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({ isDisabled }) => (isDisabled ? "pointer" : "no-drop")};
  opacity: ${({ isDisabled }) => !isDisabled && 0.3};
  ${({ typo }) => theme.typo[typo]}
  color: ${({ color }) => theme.color[color]};
  border: none;
  background-color: ${({ bgColor }) => theme.color[bgColor]};

  &:hover {
    opacity: ${({ isDisabled }) => isDisabled && 0.7};
  }
`;
