"use client";

import { styled } from "styled-components";
import SummaryBoard, {
  SummaryBoardProps,
} from "../molecules/SummaryBoard/SummaryBoard";

interface Props {
  summaryBoards: SummaryBoardProps[];
}

const DashboardTemplate = ({ summaryBoards }: Props) => {
  return (
    <Container>
      <Wrapper>
        <SummaryBoardsWrapper>
          {summaryBoards.map((summaryBoard, idx) => (
            <SummaryBoard {...summaryBoard} key={idx} />
          ))}
        </SummaryBoardsWrapper>
      </Wrapper>
    </Container>
  );
};

export default DashboardTemplate;

const Container = styled.main`
  display: flex;
  justify-content: center;
  padding: 50px 0 75px 0;
`;

const Wrapper = styled.div`
  width: 1080px;
  max-width: 90%;
`;

const SummaryBoardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 350px);
  gap: 15px;
`;
