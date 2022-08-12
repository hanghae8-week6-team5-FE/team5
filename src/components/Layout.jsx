import React from "react";
import styled from "styled-components";
import Header from "./Header";
const Layout = ({ children, bgColor = "fff" }) => {
  return (
    <StLayout bgColor={bgColor}>
      <>
        <Header />
      </>
      {children}
    </StLayout>
  );
};
export default Layout;

const StLayout = styled.div`
  background-color: ${({ bgColor }) => {
    return bgColor;
  }};
`;
