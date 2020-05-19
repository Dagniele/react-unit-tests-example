import React from "react";
import styled from "styled-components";
import { makeShadow } from "../../utils/mixins";

const StyledPanel = styled.div`
  ${props => makeShadow(props.dp)};
  padding: 10px;
  margin-bottom: 8px;
`;

const Panel = props => {
  const { dp = 2 } = props;
  return <StyledPanel dp={dp}>{props.children}</StyledPanel>;
};

export default Panel;
