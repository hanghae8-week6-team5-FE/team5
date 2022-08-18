import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../ele/Button";
import { __GetList } from "../../redux/modules/mainSlice";
import MainCategory from "../../features/main/MainCategory";
import { useNavigate } from "react-router-dom";

const MainList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { lists } = useSelector((state) => state.main);
  const main_list = ["ALL", "한식", "중식", "양식", "치킨", "디저트"];
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
    }
  };
  useEffect(() => {
    dispatch(__GetList());
  }, []);
  useEffect(() => {
    // if (lists.length === 0) {
    //   return;
    // }
    setNewList(lists);
  }, [lists]);

  console.log(newList);
  return (
    <StOne>
      <StButtonGroup>
        <div
          onClick={() => {
            navigate("/writepage");
          }}
        >
          <StyledBtn>글작성 하기</StyledBtn>
        </div>
        <StCategoryButtonOutline>
          {main_list.map((list, idx) => {
            return (
              <StbtnStyle key={idx} id={list} onClick={handFilterData}>
                {list}
              </StbtnStyle>
            );
          })}
        </StCategoryButtonOutline>
      </StButtonGroup>
      <StOne>
        <StContainerBackside>
          <StDivMapBox style={{ display: "flex" }}>
            {newList.map((list, idx) => {
              return (
                <StMainCategory>
                  <MainCategory key={idx} list={list}></MainCategory>
                </StMainCategory>
              );
            })}
          </StDivMapBox>
        </StContainerBackside>
      </StOne>
    </StOne>
  );
};

export default MainList;
const Stflexbox = styled.div`
  display: flex;
`;

const StOne = styled.div`
  display: flex;
  width: 1200px;
  margin: auto;
  align-content: center;
  justify-content: center;
  align-items: flex-start;
  overflow-x: hidden;
  overflow-y: auto;
  flex-direction: row;
  flex-wrap: wrap;

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

const StContainerBackside = styled.div`
  /* background-color: black; */
  flex-direction: row;
  flex-wrap: wrap;
  width: 1200px;
  height: 2000px;
  display: flex;
  gap: 20px;
  /* grid-template-columns: 1fr 1fr 1fr; */
  /* background-color: blue; */
  margin-top: 10px;
  margin-bottom: 10px;
  align-content: flex-start;
  justify-content: flex-start;
  align-items: center;
`;

const StMainCategory = styled.div`
  /* background-color: red; */
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
  justify-content: flex-start;
  align-items: normal;
`;

const StDivMapBox = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-start;
  align-items: flex-start;
`;


const StyledBtn = styled.button`
  color: white;
  border: solid 2px ;
  padding: px;
  border-radius: 10px;
  margin: 1px;
  background-color: rgb(215, 98, 115);

  &:hover {
    cursor: pointer;
    border: solid 2px transparent;
    background-color: white;
    color: rgb(215, 98, 115);
    border: solid 2px white;
    }
`;


const StbtnStyle = styled.button`
  color: white;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  margin: 1px;
  background-color: rgb(215, 98, 115);

  &:hover {
    cursor: pointer;
    border: 2px transparent;
    background-color: white;
    color: rgb(215, 98, 115);
    /* border: solid 2px white; */
  }
`;