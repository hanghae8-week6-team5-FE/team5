import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __goodUser } from "../../redux/modules/goodSilce";

import { __GetList } from "../../redux/modules/mainSlice";

const MainCategory = ({ list }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goodHandler = () => {
    dispatch(__goodUser(list.postId));
  };

  console.log(list);

  const { title, images, postId } = list;
  console.log(title);
  return (
    <StList>
      <p>{list.title}</p>

      <StImgage
        onClick={() => {
          navigate(`/detail/${postId}`);
        }}
        src={images}
        alt="사진"
      ></StImgage>
      <button onClick={goodHandler}>좋아요!</button>
      <p>{list.likes}</p>
    </StList>
  );
};
const StList = styled.div`
  width: 300px;
  height: 200px;
`;
const StImgage = styled.img`
  width: 100px;
  height: 100px;
`;
export default MainCategory;
