"use client";

import { styled } from "styled-components";
import ShadowBox from "../atoms/ShadowBox/ShadowBox";
import Text from "../atoms/Text/Text";
import Icon from "../atoms/Icon/Icon";
import icons from "@/styles/icons";

const LoginPageTemplate = () => {
  return (
    <Container>
      <ShadowWrapper>
        <ShadowBox borderRadius={16} py={48} px={48} shadow="normal">
          <Wrapper>
            <Header>
              <Text label="Admin" color="gray1" typo="bold" />
              <Icon icon={icons.cancel} size={24} />
            </Header>
            <Text
              label="해고하시려면 해고하기 버튼을 눌러주세요."
              color="gray2"
              typo="thin"
            />
          </Wrapper>
        </ShadowBox>
      </ShadowWrapper>
    </Container>
  );
};

export default LoginPageTemplate;

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-width: 100%;
  min-height: 100%;
`;

const ShadowWrapper = styled.div`
  width: 600px;
  height: 470px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
