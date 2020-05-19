import React, { useState } from "react";
import styled from "styled-components";
import Panel from "../Panel/Panel";
import Button from "../Button/Button";
import ArrowRight from "../Arrows/ArrowRight";
import ArrowDown from "../Arrows/ArrowDown";

const Row = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const Column = styled.div`
  flex: 0 0 auto;
`;

const Item = props => {
  const { buttonType, title, dp } = props;

  const [open, setOpen] = useState(false);

  return (
    <Panel dp={dp}>
      <Row>
        <Column>
          <Row>
            <Column>{open ? <ArrowRight /> : <ArrowDown />}</Column>
            <Column>{title}</Column>
          </Row>
        </Column>

        <Column>
          <Button buttonType={buttonType} onClick={() => setOpen(!open)}>
            {title}
          </Button>
        </Column>
      </Row>

      {open && (
        <Row style={{ marginTop: 20 }}>
          <Column>{title} expanded</Column>
        </Row>
      )}
    </Panel>
  );
};

export default Item;
