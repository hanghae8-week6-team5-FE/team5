import React from "react";
import styled from "styled-components";
const MainCategory = ({ list }) => {
  const { title, images, loginId } = list;
  return (
    <StList>
      <p>{list.title}</p>
      <StImgage>
        <img src={images} alt="사진"></img>
      </StImgage>
    </StList>
  );
};
const StList = styled.div`
  width: 300px;
  height: 200px;
`;
const StImgage = styled.div`
  width: 100px;
  height: 100px;
`;
export default MainCategory;
