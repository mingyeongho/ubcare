"use client";

import DashboardTemplate from "@/components/templates/DashboardTemplate";
import useCurrentEmr from "@/container/home/useCurrentEmr";

const Page = () => {
  const { currGraphState, data: summaryBoards } = useCurrentEmr();

  return (
    <DashboardTemplate
      currGraphState={currGraphState}
      summaryBoards={summaryBoards}
    />
  );
};

export default Page;
