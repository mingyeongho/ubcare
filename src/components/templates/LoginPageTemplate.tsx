"use client";

import { styled } from "styled-components";
import LoginBoard, {
  LoginBoardProps,
} from "../organisms/LoginBoard/LoginBoard";

export type LoginPageTemplateProps = {
  loginBoardProps: LoginBoardProps;
};

const LoginPageTemplate = ({ loginBoardProps }: LoginPageTemplateProps) => {
  return (
    <Container>
      <ShadowWrapper>
        <LoginBoard {...loginBoardProps} />
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
`;
