import React from "react";
import styled, { css } from "styled-components";

const Button = (props) => {
  return (
    <StButton {...props} disabled={props.disabled}>
      {props.children}
    </StButton>
  );
};
export default Button;

const StButton = styled.button`
  border: 1px solid #eee;
  height: 46px;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  background-color: ${({ bgColor, disabled }) => (disabled ? "#ddd" : bgColor)};
  ${({ size }) => {
    switch (size) {
      case "large":
        return css`
          width: 100%;
        `;
      case "medium":
        return css`
          width: 80px;
        `;
      case "small":
        return css`
          width: 30px;
          height: 30px !important;
        `;
      default:
        return css`
          width: 120px;
        `;
    }
  }}
`;
