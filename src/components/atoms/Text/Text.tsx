import theme, { ColorType, TypoType } from "@/styles/theme";
import { styled } from "styled-components";

interface Props {
  label: string | number;
  typo: TypoType;
  color: ColorType;
}

const Text = ({ label, typo, color }: Props) => {
  return (
    <Index typo={typo} color={color}>
      {label}
    </Index>
  );
};

export default Text;

const Index = styled.span<{ typo: TypoType; color: ColorType }>`
  ${({ typo }) => theme.typo[typo]}
  color: ${({ color }) => theme.color[color]}
`;
