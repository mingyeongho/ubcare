import { ReactNode } from "react";

export type GraphStateType = "Employee" | "Message" | "Voucher";

export type StrictPropsWithChildren<T = unknown> = T & {
  children: ReactNode;
};

export type EmployeeSummaryType = {
  id: number;
  name: string; // 의원명
  voucher: "Event" | "Basic" | "Standard"; // 이용권
  date: string; // 이용권 마감일
  msg: number; // 문자 발송건수
  kakao: number; // 카카오톡 발송건수
  price: number; // 메시지 발송 총 금액
};
