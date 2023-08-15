import Text from "@/components/atoms/Text/Text";
import { EMR_DETAIL_NAME } from "@/utils/constant";
import { GraphStateType } from "@/utils/types";
import { styled } from "styled-components";

interface Props {
  currGraphState: GraphStateType;
}

const DashboardDetailEMR = ({ currGraphState }: Props) => {
  return (
    <Container>
      <Text
        label={EMR_DETAIL_NAME[currGraphState]}
        color="gray7"
        typo="bold2"
      />
      {currGraphState}
    </Container>
  );
};

export default DashboardDetailEMR;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
