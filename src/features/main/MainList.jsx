import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../ele/Button";
import { __GetList } from "../../redux/modules/mainSlice";
import MainCategory from "../../features/main/MainCategory";
import { useNavigate } from "react-router-dom";

const MainList = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { lists } = useSelector((state) => state.main);
  const main_list = ["ALL", "1", "2", "3", "4"];
  const why = main_list.splice(1, 5, "한식", "중식", "양식", "치킨", "디저트");
  console.log(main_list);
  const [mainList, setMainList] = useState(main_list);
  const [newList, setNewList] = useState(lists);
  console.log(lists);
  const handFilterData = (e) => {
    if (e.target.id === "ALL") {
      console.log("ALL");
      setNewList(lists);
    } else {
      const filterData = lists.filter((menu) => menu.category === e.target.id);
      setNewList(filterData);
      console.log(filterData);
    }
  };
  useEffect(() => {
    dispatch(__GetList());
  }, []);
  useEffect(() => {
    if (lists.length === 0) {
      return;
    }
    setNewList(lists);
  }, [lists]);
  console.log(newList);

  return (
    <div>
      <StOne>
        <StButtonGroup>
          <StGoToWrite
            onClick={() => {
              navigate("/writepage");
            }}
          >
            <StbtnStyle>글작성 하기</StbtnStyle>
          </StGoToWrite>
          {/* //카테고리 버튼 */}
          <StCategoryButtonOutline>
            {mainList.map((x, index) => {
              return (
                <Button
                  bgColor="sliver"
                  size="medium"
                  id={x}
                  key={index}
                  onClick={handFilterData}
                >
                  {x}
                </Button>
              );
            })}
          </StCategoryButtonOutline>
        </StButtonGroup>
        <StOne>
          <StContainerBackside>
            {/* <MainCategory newList={newList} /> */}
            {newList.map((list, idx) => {
              return (
                <StMainCategory>
                  <MainCategory key={idx} list={list}></MainCategory>
                </StMainCategory>
              );
            })}
          </StContainerBackside>
        </StOne>
      </StOne>
    </div>
  );
};

export default MainList;

const StOne = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  align-content: center;
  justify-content: center;
  flex-direction: auto;
  overflow-x: hidden;
  overflow-y: auto;
  flex-wrap: wrap;
  background-color: white;

  /* position: relative; */
`;

const StButtonGroup = styled.div`
  /* border: 1px solid black; */
`;

const StCategoryButtonOutline = styled.div`
  display: flex;
  gap: 20px;
  /* grid-template-columns: 1fr 1fr 1fr; */
  /* background-color: blue; */
  margin-top: 10px;
  margin-bottom: 10px;
`;

const StGoToWrite = styled.button`
  display: flex;
  justify-content: flex-end;
  &:hover {
    background-color: white;
  }
  /* border: 1px solid black; */
`;

const StContainerBackside = styled.div`
  background-color: white;
  flex-direction: row;
  width: 1200px;
  height: 2000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: baseline;
  /* justify-content: space-around; */
  align-content: space-around;
  gap: 20px;
  align-content: flex-start;
  /* position: absolute; */
  align-items: center;
`;

const StbtnStyle = styled.button`
  color: black;
  padding: 0.375rem 0.75rem;
  border: 1px;
  border-radius: 5px;
  cursor: pointer;
  width: 9rem;
  height: 2rem;
  margin: auto;
`;

const StMainCategory = styled.div`
  background-color: white;
  border-radius: 20px;
`;