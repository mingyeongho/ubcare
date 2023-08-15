import theme from "@/styles/theme";
import { styled } from "styled-components";

interface Props {
  label: string;
}

const SpeechBubble = ({ label }: Props) => {
  return (
    <Index>
      <Pre>{label}</Pre>
    </Index>
  );
};

export default SpeechBubble;

const Index = styled.div`
  width: fit-content;

  padding: 15px;
  background-color: ${theme.color.gray2};
  opacity: 0.9;
  border-radius: 8px;
  filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.2));

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-bottom-color: ${theme.color.gray2};
    border-top: 0;
    margin-left: -8px;
    margin-top: -8px;
  }
`;

const Pre = styled.pre`
  color: ${theme.color.white};
  ${theme.typo.medium6};
  line-height: 18px;
`;
