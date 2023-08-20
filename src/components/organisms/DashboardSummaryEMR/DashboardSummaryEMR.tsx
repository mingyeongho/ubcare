"use client";

import Text, { TextProps, TextStyleProps } from "@/components/atoms/Text/Text";
import SummaryBoard, {
  SummaryBoardProps,
} from "@/components/molecules/SummaryBoard/SummaryBoard";
import { styled } from "styled-components";

export type DashboardSummaryEMRProps = {
  summaryBoards: SummaryBoardProps[];
};

const DashboardSummaryEMR = ({ summaryBoards }: DashboardSummaryEMRProps) => {
  const titleStyleProps: TextStyleProps = {
    $typo: "bold2",
    $color: "gray7",
  };

  const titleProps: TextProps = {
    label: "EMR 연동 현황",
    ...titleStyleProps,
  };

  return (
    <Container>
      <Text {...titleProps} />
      <SummaryBoardsWrapper>
        {summaryBoards.map((summaryBoard, idx) => (
          <SummaryBoard {...summaryBoard} key={idx} />
        ))}
      </SummaryBoardsWrapper>
    </Container>
  );
};

export default DashboardSummaryEMR;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SummaryBoardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 350px);
  gap: 15px;
`;
