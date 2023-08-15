import ShadowBox from "@/components/atoms/ShadowBox/ShadowBox";
import { styled } from "styled-components";

interface Props {}

const DashboardGridContainer = ({}: Props) => {
  return (
    <Container>
      <ShadowBox borderRadius={8} py={0} px={0} shadow="thin"></ShadowBox>
    </Container>
  );
};

export default DashboardGridContainer;

const Container = styled.div``;
