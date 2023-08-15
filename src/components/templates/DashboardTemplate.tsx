"use client";

import { styled } from "styled-components";
import SummaryBoard, {
  SummaryBoardProps,
} from "../molecules/SummaryBoard/SummaryBoard";
import Text from "../atoms/Text/Text";
import { GraphStateType } from "@/utils/types";

interface Props {
  currGraphState: GraphStateType;
  summaryBoards: SummaryBoardProps[];
}

const DashboardTemplate = ({ currGraphState, summaryBoards }: Props) => {
  return (
    <Container>
      <Wrapper>
        <BoardWrapper>
          <Text label="EMR 연동 현황" color="gray7" typo="bold2" />
          <SummaryBoardsWrapper>
            {summaryBoards.map((summaryBoard, idx) => (
              <SummaryBoard {...summaryBoard} key={idx} />
            ))}
          </SummaryBoardsWrapper>
        </BoardWrapper>
        <BoardWrapper>
          <Text label="EMR 연동 의원수" color="gray7" typo="bold2" />
          {currGraphState}
        </BoardWrapper>
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
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SummaryBoardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 350px);
  gap: 15px;
`;
