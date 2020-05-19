import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  fill: ${props => props.theme.primaryColor};
  width: 24px;
  height: 24px;
`;

const ArrowRight = () => {
  return (
    <Svg viewBox="0 0 24 24">
      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
      <path fill="none" d="M0 0h24v24H0V0z" />
    </Svg>
  );
};

export default ArrowRight;
