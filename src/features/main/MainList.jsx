import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
// import Button from "../../ele/Button";
import { __GetList } from "../../redux/modules/mainSlice";
import MainCategory from "../../features/main/MainCategory";
import { openList } from "../../redux/modules/mainSlice";
import Button from "@mui/material/Button";

const MainList = (props) => {
  const dispatch = useDispatch();
  const { lists } = useSelector((state) => state.main);

  useEffect(() => {
    dispatch(__GetList());
  }, []);
  console.log(lists);

  const main_list = ["ALL", "1", "2", "3", "4", "5"];
  //   console.log(main_list);
  const [mainList, setMainList] = useState(main_list);

  const [newList, setNewList] = useState();
  const handFilterData = (e) => {
    e.preventDefault();
    const filterData = lists.filter((menu) => menu.category === e.target.id);
    if (e.target.id === "ALL") {
      console.log("ALL");
      setNewList(lists);
      //   console.log(logMenu);
    } else setNewList(filterData);
  };
  console.log(newList);

  return (
    <div>
      <Stflexbox>
        <StOne>
          {mainList.map((x, index) => {
            return (
              <Button
                variant="contained"
                color="success"
                id={x}
                key={index}
                onClick={handFilterData}
              >
                {x}
              </Button>
            );
          })}
        </StOne>
        <StTempBox style={{ display: "flex" }}>
          {/* <MainCategory newList={newList}></MainCategory> */}
          {/* {newList.map((x) => {
            return (
              <MainCategory key={x.postId} newList={newList}></MainCategory>
            );
          })} */}
        </StTempBox>
      </Stflexbox>
    </div>
  );
};

export default MainList;

const Stflexbox = styled.div`
  display: block;
  background-color: aliceblue;
  height: 2000px;
  width: 1200px;
`;

const StOne = styled.div`
  width: 500px;
  height: 100px;
  gap: 10%;
  justify-content: space-between;
  /* background-color: aqua; */
  /* align-content: center; */
  /* justify-content: center; */
  /* flex-direction: column; */
`;

// const dfasdffd = styled.button`
//   color: black;
//   border: 1px;
//   border-radius: 5px;
//   cursor: pointer;
//   width: 200px;
//   height: 100px;
//   margin: 10px 10px 10px 10px;
//   flex-direction: column;
//   gap: 10px;
// `;

const StTempBox = styled.div`
  padding: 12px;
  width: 90%;
  height: 90rem;
  margin: auto;
  margin-top: 10px;
  /* background-color: skyblue; */
`;
