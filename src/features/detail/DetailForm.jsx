import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __getDetailUser } from "../../redux/modules/DetailSlice";
import Button from "../../ele/Button";
import { useParams } from "react-router-dom";

const DetailForm = () => {
  const { posts } = useSelector((state) => state.detail);
  console.log(posts);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [edit, Setedit] = useState(false);
  const EditClickHander = () => {
    Setedit((prev) => !prev);
  };
  useEffect(() => {
    dispatch(__getDetailUser(id));
  }, []);
  return (
    <div>
      <StyledDivPrev>
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          이전페이지이동
        </Button>
      </StyledDivPrev>
      {/* {edit ? (<div></div>)} */}
      <StyledCard>
        <StyledWrapImg src={posts.images} />

        <StyledDesc>
          <StyledTitle>
            <StyledTitleH2>{posts.title} </StyledTitleH2>
            <p>{posts.content}</p>
          </StyledTitle>
          <div>
            <Button onClick={EditClickHander}>수정하기</Button>
            <Button>삭제하기</Button>
          </div>
        </StyledDesc>
      </StyledCard>
    </div>
  );
};
export default DetailForm;

const StyledDivPrev = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  padding: 20px 30px;
`;

//이미지 물어보기
const StyledWrapImg = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 20px 0 0 20px;
`;

const StyledCard = styled.div`
  background: rgba(255, 255, 255, 0.01);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const StyledDesc = styled.div`
  margin-left: 20px;
`;

const StyledTitle = styled.div`
  margin-bottom: 20px;
`;

const StyledTitleH2 = styled.div`
  font-size: 50px;
`;
