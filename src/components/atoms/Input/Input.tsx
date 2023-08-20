import theme, { TypoType } from "@/styles/theme";
import { ChangeEvent } from "react";
import { styled } from "styled-components";

export type InputStyleProps = {
  $typo: TypoType;
  $py: number;
  $px: number;
};

export type InputProps = InputStyleProps & {
  type?: "text" | "password";
  value?: string | number | readonly string[] | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  name?: string;
};

const Input = ({
  type = "text",
  value,
  onChange,
  placeholder,
  name,
  ...props
}: InputProps) => {
  return (
    <Index
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      id={name}
      name={name}
      {...props}
    />
  );
};

export default Input;

const Index = styled.input<InputStyleProps>`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border: 1px solid ${theme.color.gray4};
  ${({ $typo }) => theme.typo[$typo]}
  padding: ${({ $py, $px }) => `${$py}px ${$px}px`}
`;
