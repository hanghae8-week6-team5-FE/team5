import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { __GetList } from "../../redux/modules/mainSlice";

const MainList = (props) => {
  const dispatch = useDispatch();
  const { lists } = useSelector((state) => state.main);

  useEffect(() => {
    dispatch(__GetList());
  }, []);
  console.log(lists);
  return (
    <Stflexbox>
      {lists.map((elem) => (
        <Stflexbox key={elem.postId}>
          <p>{elem.title}</p>
          {/* <img src="${elem.images}"></img> */}
          <StImg imgUrl={elem.images}></StImg>
          <div></div>
        </Stflexbox>
      ))}
    </Stflexbox>
  );
};

export default MainList;
const Stflexbox = styled.div`
  display: flex;
`;
const StImg = styled.div`
  width: 100px;
  height: 60vh;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.imgUrl});
`;
