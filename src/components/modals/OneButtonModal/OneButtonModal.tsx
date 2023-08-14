import Button from "@/components/atoms/Button/Button";
import ShadowBox from "@/components/atoms/ShadowBox/ShadowBox";
import Text from "@/components/atoms/Text/Text";
import { styled } from "styled-components";

interface Props {
  title: string;
  contents: string[];
  buttonLabel: string;
}

const OneButtonModal = ({ title, contents, buttonLabel }: Props) => {
  return (
    <ShadowBox borderRadius={20} py={48} px={48} shadow="thin">
      <Container>
        <Wrapper>
          <Text label={title} color="gray1" typo="bold" />
          <ContentsWrapper>
            {contents.map((content, idx) => (
              <Text label={content} color="gray2" typo="thin" key={idx} />
            ))}
          </ContentsWrapper>
        </Wrapper>
        <ButtonWrapper>
          <Button
            label={buttonLabel}
            borderRadius={8}
            bgColor="gray5"
            color="gray1"
            typo="bold2"
          />
        </ButtonWrapper>
      </Container>
    </ShadowBox>
  );
};

export default OneButtonModal;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ButtonWrapper = styled.div`
  height: 60px;
`;
