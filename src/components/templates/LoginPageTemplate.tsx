"use client";

import { styled } from "styled-components";
import ShadowBox from "../atoms/ShadowBox/ShadowBox";

const LoginPageTemplate = () => {
  return (
    <Container>
      <ShadowWrapper>
        <ShadowBox
          borderRadius={16}
          py={48}
          px={48}
          shadow="normal"
        ></ShadowBox>
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
