import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Text from "../../ele/Text";
import Input from "../../ele/Input";
import Button from "../../ele/Button";

const WriteImage = () => {
  const [write, Setwrite] = useState({
    title: "",
    images: "",
    category: "",
    content: "",
  });
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    Setwrite({ ...write, [name]: value });
    console.log(write);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <Stwrite>
        <Stselect onChange={onChangeHandler} name="category">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Stselect>
        <Input onChange={onChangeHandler} name="title"></Input>
        <Stimgbox>
          <Stimg>img</Stimg>
          <Input onChange={onChangeHandler} name="img" type="file"></Input>
        </Stimgbox>
        <StFormBox>
          <Stform>
            <StTextarea onChange={onChangeHandler} name="content"></StTextarea>
            <Button>댓글작성</Button>
          </Stform>
        </StFormBox>
      </Stwrite>
    </form>
  );
};
const Stwrite = styled.div`
  width: 100vw;
  margin-top: 50px;
  padding: 50px;
`;
const Stselect = styled.select`
  width: 250px;
  height: 30px;
`;
// const Sttitle = styled.div`
//   height: 100px;
//   border: 1px solid black;
// `;
const Stimgbox = styled.div`
  height: 300px;
  display: flex;
`;
const Stimg = styled.div`
  width: 350px;
  height: 200px;
  border: 1px solid black;
  margin-right: 50px;
`;
const StFormBox = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 50px;
`;
const Stform = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
const StTextarea = styled.textarea`
  width: 70%;
  height: 100px;
`;
export default WriteImage;
