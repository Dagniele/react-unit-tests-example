import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: ${props => props.theme[`button-${props.buttonType}`]};
  color: white;
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;

const Button = props => {
  const { buttonType = "default", onClick } = props;
  return (
    <StyledButton onClick={onClick} buttonType={buttonType}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
