"use client";

import theme, { ShadowType } from "@/styles/theme";
import { PropsWithChildren } from "react";
import { styled } from "styled-components";

interface Props extends PropsWithChildren {
  borderRadius: number;
  shadow: ShadowType;
  py: number;
  px: number;
}

const ShadowBox = ({ borderRadius, shadow, py, px, children }: Props) => {
  return (
    <Container
      style={{ borderRadius, padding: `${py}px ${px}px` }}
      shadow={shadow}
    >
      {children}
    </Container>
  );
};

export default ShadowBox;

const Container = styled.div<{ shadow: ShadowType }>`
  background-color: ${theme.color.white};
  width: 100%;
  height: 100%;
  box-shadow: ${({ shadow }) => theme.shadow[shadow]};
`;
