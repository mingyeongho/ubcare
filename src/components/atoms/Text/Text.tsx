import theme, { ColorType, TypoType } from "@/styles/theme";
import { styled } from "styled-components";

interface Props {
  label: string | number;
  typo: TypoType;
  color: ColorType;
  isUnderline?: boolean;
}

const Text = ({ label, typo, color, isUnderline = false }: Props) => {
  return (
    <Index typo={typo} color={color} isUnderline={isUnderline}>
      {label}
    </Index>
  );
};

export default Text;

const Index = styled.span<{
  typo: TypoType;
  color: ColorType;
  isUnderline: boolean;
}>`
  ${({ typo }) => theme.typo[typo]}
  color: ${({ color }) => theme.color[color]};
  text-decoration: ${({ isUnderline }) => isUnderline && "underline"};
`;
