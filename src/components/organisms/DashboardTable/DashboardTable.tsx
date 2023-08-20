import ShadowBox, {
  ShadowBoxStyleProps,
} from "@/components/atoms/ShadowBox/ShadowBox";
import Table, {
  TableProps,
  TableStyleProps,
} from "@/components/molecules/Table/Table";

type DashboardTableProps = {};

const DashboardTable = ({}: DashboardTableProps) => {
  // -------------------------------------
  const shadowBoxStyleProps: ShadowBoxStyleProps = {
    $border_radius: 8,
    $py: 0,
    $px: 0,
    $shadow: "thin",
  };
  // -----------------------------------------
  const tableStyleProps: TableStyleProps = {
    $columns: "302px 126px 164px 140px 164px 184px",
  };

  const tableProps: TableProps = {
    headerTitles: [
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
    ...tableStyleProps,
  };
  // -------------------------------------------
  return (
    <ShadowBox {...shadowBoxStyleProps}>
      <Table {...tableProps} />
    </ShadowBox>
  );
};

export default DashboardTable;
