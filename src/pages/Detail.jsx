import React, { useEffect } from "react";
import Styled from "styled-components";
import Header from "../components/Header";


function Detail() {
  return (
    <div>
      <StyledDivPrev>
        <StyledBtn>이전페이지이동</StyledBtn>
      </StyledDivPrev>

      <StyledDivWarp>
        <StyledCard>
          <StyledWrapImg src="https://picsum.photos/300/450" />

          <StyledDesc>
            <StyledTitle>
              <StyledTitleH2>피자 </StyledTitleH2>
              <p>피자 설명을 기재.
                피자 설명! 피자가 너무 맛있어요 냐미냐미 어쩌구 저쩌구 dolor sit amet consectetur adipisicing elit. Iure repellendus libero blanditiis inventore.
                Aspernatur sit rddderum perspiciatis maxime amet libero, molestiae nam cum adipisci alias inventore soluta
                ipsum magni? Voluptate.</p>
            </StyledTitle>
            <div>
              <StyledBtn>수정하기</StyledBtn>
              <StyledBtn>삭제하기</StyledBtn>
            </div>
          </StyledDesc>
        </StyledCard>

        <div>
          <StyledWriteBox>
            <StyledInputBox type="text" spellcheck="false" />
            <StyledBtn>추가하기</StyledBtn>
          </StyledWriteBox>
          <ul>
            <StyledInputBox_Li>
              댓글이 적혀있습니다. 댓글을 적었습니다!
              <StyledBtn>수정하기</StyledBtn>
              <StyledBtn>삭제하기</StyledBtn>
            </StyledInputBox_Li>
            <StyledInputBox_Li>
              Test Commit Lorem ipsum dolor sit amet, consectetur adipisicing elit. In blanditiis culpa mollitia, numquam repudiandae,
              modi perferendis quam  quidem molestiae exercitationem incidunt facilis minima velit rerum voluptas magnam
              quod. Odit, assumenda.
              <StyledBtn>수정하기</StyledBtn>
              <StyledBtn>삭제하기</StyledBtn>
            </StyledInputBox_Li>
          </ul>
        </div>
      </StyledDivWarp>
    </div>
  )
}

export default Detail;

const StyledDivPrev = Styled.div`
display: flex;
justify-content: flex-end;
margin-bottom: 20px;
padding: 20px 30px;
`;

const StyledDivWarp = Styled.div`
padding: 0 10px;
width: 500px;
margin: 0 auto;
`;

//이미지 물어보기
const StyledWrapImg = Styled.img`
border-radius: 20px 0 0 20px;
`;

const StyledCard = Styled.div`
background: rgba( 255, 255, 255, 0.01 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.20 );
backdrop-filter: blur( 2.5px );
-webkit-backdrop-filter: blur( 2.5px );
border-radius: 20px;
border: 1px solid rgba(255, 255, 255, 0.18);

display: flex;
justify-content: space-between;
margin-bottom: 20px;
`;

const StyledDesc = Styled.div`
margin-left: 20px;
`;

const StyledTitle = Styled.div`
margin-bottom: 20px;
`;


const StyledTitleH2 = Styled.div`
font-size: 50px;
`;

const StyledWriteBox = Styled.div`
width: 100%;
`;

const StyledInputBox = Styled.input`
color: rgb(144, 200, 247);
width: 80%;
padding: 10px;
border-radius: 20px;
border: 2px solid rgb(144, 200, 247);
background-color: white;

&:focus{
outline: none;
}
`;

const StyledInputBox_Li = Styled.li`
list-style-type: none;
margin-top: 10px;
margin-bottom: 10px;
`;

const StyledBtn = Styled.button`
color: white;
border: solid 2px transparent;
padding: 5px;
border-radius: 10px;
margin : 1px;
background-color: rgb(144, 200, 247);

&:hover{
cursor: pointer;
background-color: transparent;
color: grey;
border: solid 2px rgb(144, 200, 247);
}
`;