import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const MainCategory = () => {
  return (
    <WrapSpan>
      <CategorySpan
        id="all"
        color="black"
        bgcolor="grey"
        onClick={changeCategory}
      >
        ALL
      </CategorySpan>
      <CategorySpan
        id="javascript"
        color="white"
        bgcolor="yellow"
        onClick={changeCategory}
      >
        JavaScript
      </CategorySpan>
      <CategorySpan
        id="node"
        color="white"
        bgcolor="green"
        onClick={changeCategory}
      >
        Node
      </CategorySpan>
      <CategorySpan
        id="java"
        color="black"
        bgcolor="red"
        onClick={changeCategory}
      >
        Java
      </CategorySpan>
      <CategorySpan
        id="react"
        color="black"
        bgcolor="blueL"
        onClick={changeCategory}
      >
        React
      </CategorySpan>
      <CategorySpan
        id="vue"
        color="white"
        bgcolor="blueD"
        onClick={changeCategory}
      >
        Vue
      </CategorySpan>
    </WrapSpan>
  );
};

const WrapSpan = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 30px;
`;

const CategorySpan = styled.button`
  width: 130px;
  padding: 5px 8px;
  border-radius: 20px;
  border: none;
  color: ${({ color }) => `var(--${color})`};
  background-color: ${({ bgcolor }) => `var(--${bgcolor})`};
  border: 1px solid var(--white);
  :hover {
    border: 1px solid var(--blue);
  }
`;

export default MainCategory;
