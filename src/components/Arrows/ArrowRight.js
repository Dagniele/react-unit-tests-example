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
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
      <path fill="none" d="M0 0h24v24H0z" />
    </Svg>
  );
};

export default ArrowRight;
