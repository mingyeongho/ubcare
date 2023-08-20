"use client";

import Button, {
  ButtonProps,
  ButtonStyleProps,
} from "@/components/atoms/Button/Button";
import { InputStyleProps } from "@/components/atoms/Input/Input";
import { LabelStyleProps } from "@/components/atoms/Label/Label";
import ShadowBox, {
  ShadowBoxStyleProps,
} from "@/components/atoms/ShadowBox/ShadowBox";
import Text, { TextProps, TextStyleProps } from "@/components/atoms/Text/Text";
import LabelInput, {
  LabelInputProps,
} from "@/components/molecules/LabelInput/LabelInput";
import { ChangeEvent } from "react";
import { styled } from "styled-components";

export interface LoginBoardProps {
  id: string;
  pw: string;
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const LoginBoard = ({ id, pw, onChangeInput }: LoginBoardProps) => {
  // 쉐도우 박스 스타일
  const shadowBoxStyleProps: ShadowBoxStyleProps = {
    $border_radius: 16,
    $py: 48,
    $px: 48,
    $shadow: "normal",
  };

  // 타이틀 스타일
  const titleStyleProps: TextStyleProps = {
    $typo: "bold2",
    $color: "gray1",
  };

  // 타이틀 데이터 & 스타일
  const titleProps: TextProps = {
    label: "Admin",
    ...titleStyleProps,
  };

  // 아이디 / 비밀번호 레이블 스타일
  const labelStyleProps: LabelStyleProps = {
    $typo: "regular6",
    $color: "gray1",
  };

  // 아이디 / 비밀번호 인풋 스타일
  const inputStyleProps: InputStyleProps = {
    $typo: "regular6",
    $py: 15,
    $px: 19,
  };

  // 아이디 레이브 인풋 데이터 & 스타일
  const idLabelInputProps: LabelInputProps = {
    $gap: 8,
    labelProps: { label: "아이디", htmlFor: "id", ...labelStyleProps },
    inputProps: {
      value: id,
      name: "id",
      placeholder: "입력해 주세요.",
      onChange: onChangeInput,
      type: "text",
      ...inputStyleProps,
    },
  };

  // 비밀번호 레이블 인풋 데이터 & 스타일
  const pwLabelInputProps: LabelInputProps = {
    $gap: 8,
    labelProps: { label: "비밀번호", htmlFor: "pw", ...labelStyleProps },
    inputProps: {
      value: pw,
      name: "pw",
      placeholder: "입력해 주세요.",
      onChange: onChangeInput,
      type: "password",
      ...inputStyleProps,
    },
  };

  // 로그인 버튼 스타일
  const loginButtonStyleProps: ButtonStyleProps = {
    $typo: "bold4",
    $color: "white",
    $border_radius: 8,
    $bg_color: "blue1",
  };

  // 로그인 버튼 데이터 & 스타일
  const loginButtonProps: ButtonProps = {
    label: "로그인",
    is_disabled: id && pw ? true : false,
    ...loginButtonStyleProps,
  };

  return (
    <ShadowBox {...shadowBoxStyleProps}>
      <Container>
        <Header>
          <Text {...titleProps} />
        </Header>
        <LabelInput {...idLabelInputProps} />
        <LabelInput {...pwLabelInputProps} />
        <ButtonWrapper>
          <Button {...loginButtonProps} />
        </ButtonWrapper>
      </Container>
    </ShadowBox>
  );
};

export default LoginBoard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  height: 60px;
`;
