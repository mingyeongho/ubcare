import Input, { InputProps } from "@/components/atoms/Input/Input";
import Label, { LabelProps } from "@/components/atoms/Label/Label";
import { styled } from "styled-components";

export type LabelInputStyleProps = {
  $gap: number;
};

export type LabelInputProps = LabelInputStyleProps & {
  labelProps: LabelProps;
  inputProps: InputProps;
};

const LabelInput = ({ labelProps, inputProps, ...props }: LabelInputProps) => {
  return (
    <Container {...props}>
      <Label {...labelProps} />
      <Input {...inputProps} />
    </Container>
  );
};

export default LabelInput;

const Container = styled.div<LabelInputStyleProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => `${$gap}px`};
`;
