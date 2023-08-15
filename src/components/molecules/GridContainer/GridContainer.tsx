import Text from "@/components/atoms/Text/Text";
import SpeechBubble from "@/components/atoms/SpeechBubble/SpeechBubble";
import theme, { ColorType } from "@/styles/theme";
import { GridHeaderItemType } from "@/utils/types";
import { styled } from "styled-components";
import Tooltip from "@/components/headless/Tooltip/Tooltip";
import Icon from "@/components/atoms/Icon/Icon";
import icons from "@/styles/icons";

interface Props {
  columns: string;
  header_bg_color: ColorType;
  headerItems: GridHeaderItemType[];
}

const GridContainer = ({ columns, header_bg_color, headerItems }: Props) => {
  return (
    <Container>
      <Header $columns={columns} $header_bg_color={header_bg_color}>
        {headerItems.map((item, idx) => {
          const { label, tooltip } = item;
          return (
            <HeaderItem key={idx}>
              <Text label={label} color="white" typo="bold6" />
              {tooltip && (
                <Tooltip
                  trigger={
                    <Icon
                      icon={icons.question}
                      size={12}
                      cursorPointer={false}
                    />
                  }
                  panel={<SpeechBubble label={tooltip} />}
                />
              )}
            </HeaderItem>
          );
        })}
      </Header>
    </Container>
  );
};

export default GridContainer;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Header = styled.div<{ $columns: string; $header_bg_color: ColorType }>`
  display: grid;
  grid-template-columns: ${({ $columns }) => $columns};
  justify-items: center;
  align-items: center;
  background-color: ${({ $header_bg_color }) => theme.color[$header_bg_color]};
  height: 60px;
`;

const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
