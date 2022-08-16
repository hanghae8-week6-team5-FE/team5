import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MainCategory = ({ list }) => {
  const navigate = useNavigate();

  const { title, images, postId } = list;
  return (
    <StList>
      <p>{list.title}</p>
      <StImgage>
        <img
          onClick={() => {
            navigate(`/detail/${postId}`);
          }}
          src={images}
          alt="사진"
        ></img>
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
