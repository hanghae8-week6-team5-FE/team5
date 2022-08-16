import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../ele/Button";
import { __GetList } from "../../redux/modules/mainSlice";
import MainCategory from "../../features/main/MainCategory";
import { openList } from "../../redux/modules/mainSlice";

const MainList = (props) => {
  const dispatch = useDispatch();
  const { lists } = useSelector((state) => state.main);
<<<<<<< HEAD
  console.log(lists);
=======
  const main_list = ["ALL", "1", "2", "3", "4", "5"];
  const [mainList, setMainList] = useState(main_list);
  const [newList, setNewList] = useState(lists);
  const [first, Setfirst] = useState("All");

  const handFilterData = (e) => {
    if (e.target.id === "ALL") {
      console.log("ALL");
      setNewList(lists);
    } else {
      const filterData = lists.filter((menu) => menu.category === e.target.id);
      setNewList(filterData);
    }
  };
>>>>>>> 4b9c9f225fbc03a7fdf9e90ebd76286ce3f939b6
  useEffect(() => {
    dispatch(__GetList());
  }, []);
  return (
    <Stflexbox>
<<<<<<< HEAD
      {lists &&
        lists.map((elem) => (
          <Stflexbox key={elem.postId}>
            <p>{elem.title}</p>
            {/* <StImg imgUrl={elem.images}></StImg> */}
            <div></div>
          </Stflexbox>
        ))}

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
=======
      {main_list.map((list, idx) => {
        return (
          <Button key={idx} id={list} onClick={handFilterData}>
            {list}
          </Button>
        );
      })}

>>>>>>> 4b9c9f225fbc03a7fdf9e90ebd76286ce3f939b6
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
