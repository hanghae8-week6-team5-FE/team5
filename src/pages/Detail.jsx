import React, { useEffect } from "react";
import Styled from "styled-components";
import Header from "../components/Header";
import Layout from "../components/Layout";
import CommentForm from "../features/detail/CommentForm";
import DetailForm from "../features/detail/DetailForm";

function Detail() {
  return (
    <Layout>
      <DetailForm></DetailForm>
      <CommentForm></CommentForm>
    </Layout>
  );
}

export default Detail;
