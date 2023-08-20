"use client";

import Text, { TextProps, TextStyleProps } from "@/components/atoms/Text/Text";
import { EMR_DETAIL_NAME } from "@/utils/constant";
import { GraphStateType } from "@/utils/types";
import { styled } from "styled-components";

export type DashboardDetailEMRProps = {
  currGraphState: GraphStateType;
};

const DashboardDetailEMR = ({ currGraphState }: DashboardDetailEMRProps) => {
  const titleStyleProps: TextStyleProps = {
    $typo: "bold2",
    $color: "gray7",
  };

  const titleProps: TextProps = {
    label: "EMR 연동 의원수",
    ...titleStyleProps,
  };

  return (
    <Container>
      <Text {...titleProps} />
      {currGraphState}
    </Container>
  );
};

export default DashboardDetailEMR;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
