import Icon from "@/components/atoms/Icon/Icon";
import ShadowBox from "@/components/atoms/ShadowBox/ShadowBox";
import Text from "@/components/atoms/Text/Text";
import icons from "@/styles/icons";
import { styled } from "styled-components";

export interface SummaryBoardProps {
  icon: {
    src: string;
    alt: string;
  };
  title: string;
  subTitle: string;
  value: number;
  unit: "num" | "won";
  fluctuation: number; // 등락률
}

const SummaryBoard = ({
  icon,
  title,
  subTitle,
  value,
  unit,
  fluctuation,
}: SummaryBoardProps) => {
  return (
    <ShadowBox borderRadius={8} py={27} px={18} shadow="thin">
      <Container>
        <Icon icon={icon} size={96} cursorPointer={false} />
        <Wrapper>
          <TitleWrapper>
            <Text label={title} color="gray6" typo="bold5" />
            <Text label={`(${subTitle})`} color="gray6" typo="medium7" />
          </TitleWrapper>
          <ValueWrapper>
            <Text label={value} color="gray7" typo="bold1" />
            <Text
              label={unit === "num" ? "개" : "원"}
              color="gray7"
              typo="bold3"
            />
          </ValueWrapper>
          <FooterWrapper>
            <FluctuationWrapper>
              <Icon
                icon={
                  fluctuation > 0
                    ? icons.arrowCircleUpRight
                    : icons.arrowCircleDownLeft
                }
                size={19}
                cursorPointer={false}
              />
              <Text
                label={fluctuation > 0 ? `+${fluctuation}%` : `${fluctuation}%`}
                color={fluctuation > 0 ? "blue2" : "red1"}
                typo="medium6"
              />
            </FluctuationWrapper>
          </FooterWrapper>
        </Wrapper>
      </Container>
    </ShadowBox>
  );
};

export default SummaryBoard;

const Container = styled.div`
  display: flex;
  gap: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ValueWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FluctuationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
