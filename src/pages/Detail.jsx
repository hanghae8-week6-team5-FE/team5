import React from "react";
import Layout from "../components/Layout";
import DetailForm from "../features/detail/DetailForm";
import CommentForm from "../features/detail/CommentForm";
import DetailForm from "../features/detail/DetailForm";

const Detail = () => {
  return (
    <Layout>
      <DetailForm></DetailForm>
      <CommentForm></CommentForm>
    </Layout>
  );
};