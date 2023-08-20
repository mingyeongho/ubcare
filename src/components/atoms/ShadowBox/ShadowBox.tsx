import theme, { ShadowType } from "@/styles/theme";
import { StrictPropsWithChildren } from "@/utils/types";
import { styled } from "styled-components";

export interface ShadowBoxStyleProps {
  $border_radius: number;
  $shadow: ShadowType;
  $py: number;
  $px: number;
}

const ShadowBox = ({
  children,
  ...props
}: StrictPropsWithChildren<ShadowBoxStyleProps>) => {
  return <Container {...props}>{children}</Container>;
};

export default ShadowBox;

const Container = styled.div<ShadowBoxStyleProps>`
  background-color: ${theme.color.white};
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: ${({ $border_radius }) => `${$border_radius}px`};
  box-shadow: ${({ $shadow }) => theme.shadow[$shadow]};
  padding: ${({ $py, $px }) => `${$py}px ${$px}px`};
`;
