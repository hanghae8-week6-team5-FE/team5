import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../ele/Button";
import { __GetList } from "../../redux/modules/mainSlice";
import MainCategory from "../../features/main/MainCategory";
import { openList } from "../../redux/modules/mainSlice";

const MainList = (props) => {
  useEffect(() => {
    dispatch(__GetList());
  }, []);
  const dispatch = useDispatch();
  const { lists } = useSelector((state) => state.main);
  useEffect(() => {
    dispatch(__GetList());
  }, []);
  const main_list = ["ALL", "1", "2", "3", "4", "5"];
  const [mainList, setMainList] = useState(main_list);
  const [newList, setNewList] = useState(lists);
  const [first, Setfirst] = useState("All");
  console.log(newList);

  const handFilterData = (e) => {
    if (e.target.id === "ALL") {
      console.log("ALL");
      setNewList(lists);
    } else {
      const filterData = lists.filter((menu) => menu.category === e.target.id);
      setNewList(filterData);
    }
  };

  return (
    <Stflexbox>
      {main_list.map((list, idx) => {
        return (
          <Button key={idx} id={list} onClick={handFilterData}>
            {list}
          </Button>
        );
      })}

      <div style={{ display: "flex" }}>
        {newList.map((list, idx) => {
          return <MainCategory key={idx} list={list}></MainCategory>;
        })}
      </div>
    </Stflexbox>
  );
};

export default MainList;
const Stflexbox = styled.div`
  display: flex;
`;
