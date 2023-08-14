import { SummaryBoardProps } from "@/components/molecules/SummaryBoard/SummaryBoard";
import DashboardTemplate from "@/components/templates/DashboardTemplate";
import icons from "@/styles/icons";
import { useMemo } from "react";

const Page = () => {
  const summaryBoards: SummaryBoardProps[] = useMemo(
    () => [
      {
        icon: icons.humans,
        title: "연동 의원 수",
        subTitle: "현재 기준",
        value: 20,
        unit: "num",
        fluctuation: 15,
      },
      {
        icon: icons.dollars,
        title: "이용권 금액",
        subTitle: "이번달 예상 금액",
        value: 20,
        unit: "won",
        fluctuation: -15,
      },
      {
        icon: icons.comments,
        title: "메시지 발송 금액",
        subTitle: "이번달 예상 금액",
        value: 20,
        unit: "won",
        fluctuation: 15,
      },
    ],
    []
  );

  return <DashboardTemplate summaryBoards={summaryBoards} />;
};

export default Page;
