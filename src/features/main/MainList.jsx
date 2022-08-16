import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../ele/Button";
import { __GetList } from "../../redux/modules/mainSlice";
import MainCategory from "../../features/main/MainCategory";

const MainList = (props) => {
  const useButton = useRef();
  const dispatch = useDispatch();
  const { lists } = useSelector((state) => state.main);
  console.log(lists);

  useEffect(() => {
    dispatch(__GetList());
  }, []);
  console.log(lists);
  return (
    <Stflexbox>
<<<<<<< HEAD
      {lists &&
        lists.map((elem) => (
          <Stflexbox key={elem.postId}>
            <p>{elem.title}</p>
            <StImg imgUrl={elem.images}></StImg>
            <div></div>
          </Stflexbox>
        ))}
=======
      <div id="All" style={{ width: "100px" }}>
        1
      </div>
      <div id="1" style={{ width: "100px" }}>
        1
      </div>
      <div id="2" style={{ width: "50px" }}>
        2
      </div>
      <div id="3" style={{ width: "50px" }}>
        3
      </div>
      <div id="4" style={{ width: "50px" }}>
        4
      </div>
      <div id="5" style={{ width: "50px" }}>
        5
      </div>
      <div style={{ display: "flex" }}>
        {lists.map((list) => {
          return <MainCategory list={list}></MainCategory>;
        })}
      </div>
>>>>>>> da0a0738394f0d818c8890d19bb99c4814a04c13
    </Stflexbox>
  );
};

export default MainList;
const Stflexbox = styled.div`
  display: flex;
`;
