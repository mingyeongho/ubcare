"use client";

import { ReactNode } from "react";
import { styled } from "styled-components";

interface Props {
  trigger: ReactNode;
  panel: ReactNode;
}

const Tooltip = ({ trigger, panel }: Props) => {
  return (
    <Trigger>
      {trigger}
      <Panel>{panel}</Panel>
    </Trigger>
  );
};

export default Tooltip;

const Trigger = styled.div`
  &:hover {
    & > div:last-of-type {
      opacity: 1;
    }
  }
`;

const Panel = styled.div`
  position: absolute;
  margin-top: 12px;
  transform: translateX(-50%);
  opacity: 0;
  transition: all 0.5s;
`;
