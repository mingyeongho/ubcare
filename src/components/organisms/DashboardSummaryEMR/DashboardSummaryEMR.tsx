"use client";

import Text from "@/components/atoms/Text/Text";
import SummaryBoard, {
  SummaryBoardProps,
} from "@/components/molecules/SummaryBoard/SummaryBoard";
import { styled } from "styled-components";

interface Props {
  summaryBoards: SummaryBoardProps[];
}

const DashboardSummaryEMR = ({ summaryBoards }: Props) => {
  return (
    <Container>
      <Text label="EMR 연동 현황" color="gray7" typo="bold2" />
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
