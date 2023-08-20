import Icon, { IconProps, IconStyleProps } from "@/components/atoms/Icon/Icon";
import ShadowBox, {
  ShadowBoxStyleProps,
} from "@/components/atoms/ShadowBox/ShadowBox";
import Text, { TextProps, TextStyleProps } from "@/components/atoms/Text/Text";
import icons from "@/styles/icons";
import { styled } from "styled-components";

export type SummaryBoardProps = {
  icon: {
    src: string;
    alt: string;
  };
  title: string;
  subTitle: string;
  value: number;
  unit: "num" | "won";
  fluctuation: number; // 등락률
  onClickViewMore?: () => void;
};

const SummaryBoard = ({
  icon,
  title,
  subTitle,
  value,
  unit,
  fluctuation,
  onClickViewMore,
}: SummaryBoardProps) => {
  // ------------------------------------------------------
  const shadowBoxStyleProps: ShadowBoxStyleProps = {
    $border_radius: 8,
    $py: 27,
    $px: 18,
    $shadow: "thin",
  };
  // -------------------------------------------------------
  const iconStyleProps: IconStyleProps = {
    $size: 96,
    $cursor_pointer: false,
  };

  const iconProps: IconProps = {
    icon,
    ...iconStyleProps,
  };
  // -----------------------------------------------------
  const titleStyleProps: TextStyleProps = {
    $typo: "bold5",
    $color: "gray6",
  };

  const titleProps: TextProps = {
    label: title,
    ...titleStyleProps,
  };
  // -----------------------------------------------------
  const subTitleStyleProps: TextStyleProps = {
    $typo: "medium7",
    $color: "gray6",
  };

  const subTitleProps: TextProps = {
    label: `(${subTitle})`,
    ...subTitleStyleProps,
  };
  // ------------------------------------------------------
  const valueStyleProps: TextStyleProps = {
    $typo: "bold1",
    $color: "gray7",
  };

  const valueProps: TextProps = {
    label: value,
    ...valueStyleProps,
  };
  // -----------------------------------------------------
  const unitStyleProps: TextStyleProps = {
    $typo: "bold3",
    $color: "gray7",
  };

  const unitProps: TextProps = {
    label: unit === "num" ? "개" : "원",
    ...unitStyleProps,
  };
  // ------------------------------------------------------
  const fluctuationIconStyleProps: IconStyleProps = {
    $size: 19,
    $cursor_pointer: false,
  };

  const fluctuationIconProps: IconProps = {
    icon:
      fluctuation > 0 ? icons.arrowCircleUpRight : icons.arrowCircleDownLeft,
    ...fluctuationIconStyleProps,
  };
  // -----------------------------------------------------------
  const fluctuationTextStyleProps: TextStyleProps = {
    $typo: "medium6",
    $color: fluctuation > 0 ? "blue2" : "red1",
  };

  const fluctuationTextProps: TextProps = {
    label: fluctuation > 0 ? `+${fluctuation}%` : `${fluctuation}%`,
    ...fluctuationTextStyleProps,
  };
  // --------------------------------------------------------------
  const viewmoreTextStyleProps: TextStyleProps = {
    $typo: "bold7",
    $color: "blue3",
    $is_underline: true,
  };

  const viewmoreTextProps: TextProps = {
    label: "View More",
    ...viewmoreTextStyleProps,
  };
  return (
    <ShadowBox {...shadowBoxStyleProps}>
      <Container>
        <Icon {...iconProps} />
        <Wrapper>
          <TitleWrapper>
            <Text {...titleProps} />
            <Text {...subTitleProps} />
          </TitleWrapper>
          <ValueWrapper>
            <Text {...valueProps} />
            <Text {...unitProps} />
          </ValueWrapper>
          <FooterWrapper>
            <FluctuationWrapper>
              <Icon {...fluctuationIconProps} />
              <Text {...fluctuationTextProps} />
            </FluctuationWrapper>
            <ViewMoreWrapper onClick={onClickViewMore}>
              <Text {...viewmoreTextProps} />
            </ViewMoreWrapper>
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
  flex: 1;
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
  margin-top: 6px;
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

const ViewMoreWrapper = styled.div`
  cursor: pointer;
`;
