"use client";

import { styled } from "styled-components";
import { SummaryBoardProps } from "../molecules/SummaryBoard/SummaryBoard";
import { GraphStateType } from "@/utils/types";
import DashboardSummaryEMR from "../organisms/DashboardSummaryEMR/DashboardSummaryEMR";
import DashboardDetailEMR from "../organisms/DashboardDetailEMR/DashboardDetailEMR";
import DashboardTable from "../organisms/DashboardTable/DashboardTable";

interface Props {
  currGraphState: GraphStateType;
  summaryBoards: SummaryBoardProps[];
}

const DashboardTemplate = ({ currGraphState, summaryBoards }: Props) => {
  return (
    <Container>
      <Wrapper>
        <DashboardSummaryEMR summaryBoards={summaryBoards} />
        <DashboardDetailEMR currGraphState={currGraphState} />
        <DashboardTable />
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
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
