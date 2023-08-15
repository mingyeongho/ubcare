import ShadowBox from "@/components/atoms/ShadowBox/ShadowBox";
import Text from "@/components/atoms/Text/Text";
import GridContainer from "@/components/molecules/GridContainer/GridContainer";
import theme from "@/styles/theme";
import { GridHeaderItemType } from "@/utils/types";
import { useMemo } from "react";
import { styled } from "styled-components";

interface Props {}

const DashboardGridContainer = ({}: Props) => {
  const COLUMNS = useMemo(() => "302px 126px 164px 140px 164px 184px", []);
  const HEADER_ITEMS: GridHeaderItemType[] = useMemo(
    () => [
      { label: "의원명" },
      {
        label: "이용권",
        tooltip: `[ 이용권 금액 (Vat포함) ]
Event 0원
Basic 19,900원
Standard 129,800원`,
      },
      { label: "이용권 마감일" },
      {
        label: "문자 발송건수",
        tooltip: `[ 문자 발송 금액 (Vat포함) ]
1건 당 33원`,
      },
      {
        label: "카카오톡 발송건수",
        tooltip: `[ 카카오톡 발송 금액 (Vat포함) ]
1건 당 22원`,
      },
      { label: "메시지 발송 총 금액" },
    ],
    []
  );

  return (
    <ShadowBox borderRadius={8} py={0} px={0} shadow="thin">
      <GridContainer
        columns={COLUMNS}
        header_bg_color="blue4"
        headerItems={HEADER_ITEMS}
      />
    </ShadowBox>
  );
};

export default DashboardGridContainer;
