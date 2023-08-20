import Icon from "@/components/atoms/Icon/Icon";
import SpeechBubble from "@/components/atoms/SpeechBubble/SpeechBubble";
import Text, { TextStyleProps } from "@/components/atoms/Text/Text";
import Tooltip from "@/components/headless/Tooltip/Tooltip";
import icons from "@/styles/icons";
import theme from "@/styles/theme";
import { styled } from "styled-components";

export type TableStyleProps = {
  $columns: string;
};

export type TableHeaderItem = {
  label: string;
  tooltip?: string;
};

export type TableProps = TableStyleProps & {
  headerTitles: TableHeaderItem[];
};

const Table = ({ headerTitles, ...props }: TableProps) => {
  const headerTextStyleProps: TextStyleProps = {
    $typo: "bold6",
    $color: "white",
  };

  return (
    <Container>
      <Header {...props}>
        {headerTitles.map((title, idx) => {
          const { label, tooltip } = title;
          return (
            <HeaderItem key={idx}>
              <Text label={label} {...headerTextStyleProps} />
              {tooltip && (
                <Tooltip
                  trigger={
                    <Icon
                      icon={icons.question}
                      $size={12}
                      $cursor_pointer={false}
                    />
                  }
                  panel={<SpeechBubble label={tooltip} />}
                />
              )}
            </HeaderItem>
          );
        })}
      </Header>
      <Body></Body>
    </Container>
  );
};

export default Table;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Header = styled.div<TableStyleProps>`
  background-color: ${theme.color.blue4};
  display: grid;
  grid-template-columns: ${({ $columns }) => $columns};
  justify-items: center;
  align-items: center;
  height: 60px;
`;

const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

const BodyItem = styled.div``;
