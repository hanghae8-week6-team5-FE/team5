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
  color: #080707;
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

        const StyledBtn = styled.button`
  color: rgb(215, 98, 115);
  border: solid 2px ;
  padding: 5px;
  border-radius: 10px;
  margin: 1px;
  background-color: white;

  &:hover {
    cursor: pointer;
    border: solid 2px transparent;
    background-color: rgb(215, 98, 115);
    color: white;
    border: solid 2px rgb(215, 98, 115);
  }
`;

    }
  }}
  
  
`;
