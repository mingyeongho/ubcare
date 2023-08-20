"use client";

import theme, { ColorType, TypoType } from "@/styles/theme";
import { styled } from "styled-components";

export type ButtonStyleProps = {
  $typo: TypoType;
  $color: ColorType;
  $bg_color: ColorType;
  $border_radius: number;
};

export type ButtonProps = ButtonStyleProps & {
  label: string;
  onClick?: () => void;
  is_disabled?: boolean;
};

const Button = ({
  label,
  onClick,
  is_disabled = true,
  ...props
}: ButtonProps) => {
  return (
    <Index onClick={onClick} $is_disabled={is_disabled} {...props}>
      {label}
    </Index>
  );
};

export default Button;

const Index = styled.button<ButtonStyleProps & { $is_disabled: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  cursor: ${({ $is_disabled }) => ($is_disabled ? "pointer" : "no-drop")};
  opacity: ${({ $is_disabled }) => !$is_disabled && 0.3};
  ${({ $typo }) => theme.typo[$typo]}
  color: ${({ $color }) => theme.color[$color]};
  background-color: ${({ $bg_color }) => theme.color[$bg_color]};
  border-radius: ${({ $border_radius }) => `${$border_radius}px`};

  &:hover {
    opacity: ${({ $is_disabled }) => $is_disabled && 0.7};
  }
`;
