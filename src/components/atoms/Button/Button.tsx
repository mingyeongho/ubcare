import theme, { ColorType, TypoType } from "@/styles/theme";
import { styled } from "styled-components";

interface Props {
  label: string;
  onClick?: () => void;
  isActive?: boolean;
  typo: TypoType;
  color: ColorType;
  bgColor: ColorType;
  borderRadius: number;
}

const Button = ({
  label,
  onClick,
  isActive = true,
  typo,
  color,
  bgColor,
  borderRadius,
}: Props) => {
  return (
    <Index
      onClick={onClick}
      isActive={isActive}
      typo={typo}
      color={color}
      bgColor={bgColor}
      style={{ borderRadius }}
    >
      {label}
    </Index>
  );
};

export default Button;

const Index = styled.button<{
  isActive: boolean;
  typo: TypoType;
  color: ColorType;
  bgColor: ColorType;
}>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({ isActive }) => (isActive ? "pointer" : "no-drop")};
  opacity: ${({ isActive }) => !isActive && 0.3};
  ${({ typo }) => theme.typo[typo]}
  color: ${({ color }) => theme.color[color]};
  border: none;
  background-color: ${({ bgColor }) => theme.color[bgColor]};
`;
