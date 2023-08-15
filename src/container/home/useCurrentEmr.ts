"use client";

import { SummaryBoardProps } from "@/components/molecules/SummaryBoard/SummaryBoard";
import icons from "@/styles/icons";
import { GraphStateType } from "@/utils/types";
import { useCallback, useMemo, useState } from "react";

const useCurrentEmr = () => {
  // 그래프로 보여줄 종류
  const [currGraphState, setCurrGraphState] =
    useState<GraphStateType>("Employee");

  const onChangeGraphState = useCallback(
    ({ state }: { state: GraphStateType }) => {
      setCurrGraphState(state);
    },
    []
  );

  // 조회
  const data: SummaryBoardProps[] = useMemo(
    () => [
      {
        icon: icons.humans,
        title: "연동 의원 수",
        subTitle: "현재 기준",
        value: 20,
        unit: "num",
        fluctuation: 15,
        onClickViewMore: () => onChangeGraphState({ state: "Employee" }),
      },
      {
        icon: icons.dollars,
        title: "이용권 금액",
        subTitle: "이번달 예상 금액",
        value: 20,
        unit: "won",
        fluctuation: -15,
        onClickViewMore: () => onChangeGraphState({ state: "Voucher" }),
      },
      {
        icon: icons.comments,
        title: "메시지 발송 금액",
        subTitle: "이번달 예상 금액",
        value: 20,
        unit: "won",
        fluctuation: 15,
        onClickViewMore: () => onChangeGraphState({ state: "Message" }),
      },
    ],
    [onChangeGraphState]
  );

  return { currGraphState, data };
};

export default useCurrentEmr;
