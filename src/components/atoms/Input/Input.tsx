import theme, { TypoType } from "@/styles/theme";
import { ChangeEvent } from "react";
import { styled } from "styled-components";

export interface InputProps {
  type?: "text" | "password";
  value?: string | number | readonly string[] | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  typo: TypoType;
  py: number;
  px: number;
  name?: string;
}

const Input = ({
  type,
  value,
  onChange,
  placeholder,
  typo,
  py,
  px,
  name,
}: InputProps) => {
  return (
    <Index
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      typo={typo}
      style={{ padding: `${py}px ${px}px` }}
      id={name}
      name={name}
    />
  );
};

export default Input;

const Index = styled.input<{
  typo: TypoType;
}>`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border: 1px solid ${theme.color.gray4};
  ${({ typo }) => theme.typo[typo]}
`;
