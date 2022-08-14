import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { fetchPosts } from "../../redux/modules/mainSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const MainList = () => {
  const dispatch = useDispatch();
  //   //useNavigate
  const navi = useNavigate();
  //   const categories = [
  //     {
  //       menuCategory: "전체보기",
  //       menuCategory_id: 10,
  //     },
  //     {
  //       menuCategory: "중식",
  //       menuCategory_id: 100,
  //     },
  //     {
  //       menuCategory: "피자",
  //       menuCategory_id: 200,
  //     },
  //     {
  //       menuCategory: "치킨",
  //       menuCategory_id: 300,
  //     },
  //     {
  //       menuCategory: "족발",
  //       menuCategory_id: 400,
  //     },
  //     {
  //       menuCategory: "일식",
  //       menuCategory_id: 500,
  //     },
  //     {
  //       menuCategory: "디저트",
  //       menuCategory_id: 600,
  //     },
  //   ];

  //   const [blank, setBlank] = useState(null);
  //   const fetchMenu = async () => {
  //     const { data } = await axios.get(
  //       "https://jsonplaceholder.typicode.com/posts/1/comments"
  //     );
  //     setBlank(data);
  //   };

  //   useEffect(() => {
  //     fetchMenu();
  //   }, []);
  //   console.log(blank);
  //   setMenu([...menu, selectedMenu])
  //   //   console.log(menu);

  //   const [categoryId, setCategoryId] = useState(null);
  //   //   console.log(categoryId);
  //   //   const selectedMenu = menu
  //   //     .filter((row) => row.id)
  //   //     .map((x) => x.id.includes(categoryId));
  //   //   const selectedMenu = menu.filter((x) => x.id === categoryId);
  //   //     console.log(selectedMenu);
  //   const result = menu.filter((x) => x.id === parseInt(categoryId));
  //   console.log(result);

  const log = useSelector((state) => {
    return state.mainSlice.posts;
  });
  console.log(log);
  const logMenu = log.result;
  console.log(logMenu);
  //   const fetchPosts = async () => {
  //     const firstGet = await await axios.get("http://shshinkitec.shop/api/post/");
  //     const mainGet = firstGet.data.result.;
  //     // console.log(firstGet);
  //     // console.log(mainGet);
  //     setMenu({ ...menu, mainGet }); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
  //   };

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <div>
        {logMenu &&
          logMenu.map((i) => {
            return (
              <div key={i.postId}>
                <div>{i.postId}</div>
              </div>
            );
          })}
      </div>
    </div>
  );

  {
    /* <div>
          <button>전체보기</button> {""}
          <button onClick={(e) => setCategoryId(e.target.id)} id={1}>
            1번카테고리
          </button>
        </div> */
  }
  {
    /* <CategoriesBlock>
          {categories.map((c) => (
            <Category onClick={(e) => e.target.id} key={c.menuCategory}>
              {c.menuCategory}
            </Category>
          ))}
        </CategoriesBlock> */
  }
  {
    /* <div>
          <form> */
  }
  {
    /* <div>
                {menu.map((x) => {
                  switch (x.menuCategory_id) {
                    case 1:
                      return <button>{x.menuCategory_id === 100}</button>;
                    case 2:
                      return <div>{x.menuCategory_id === 200}</div>;
                    case 3:
                      return <div>{x.menuCategory_id === 300}</div>;
                    case 4:
                      return <div>{x.menuCategory_id === 400}</div>;
                    case 5:
                      return <div>{x.menuCategory_id === 500}</div>;
                    case 6:
                      return <div>{x.menuCategory_id === 600}</div>;
                    default:
                      return <div>{x.menuCategory_id}</div>;
                  }
                })}
              </div> */
  }
  {
    /* 
            <div>
              {logMenu.map((x) => {
                return <div key={x.id}>{x.title}</div>;
              })}
            </div> */
  }
  {
    /* </form>
        </div> */
  }
};

export default MainList;
