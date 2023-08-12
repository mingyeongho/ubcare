import Input, { InputProps } from "@/components/atoms/Input/Input";
import theme, { TypoType } from "@/styles/theme";
import { styled } from "styled-components";

interface Props extends InputProps {
  label: string;
  gap: number;
}

const LabelInput = ({ label, gap, ...props }: Props) => {
  return (
    <Container style={{ gap }}>
      <Label htmlFor={props.name} typo={props.typo}>
        {label}
      </Label>
      <Input name={props.name} {...props} />
    </Container>
  );
};

export default LabelInput;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label<{ typo: TypoType }>`
  ${({ typo }) => theme.typo[typo]}
`;
