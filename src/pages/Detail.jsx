import React from "react";
import Layout from "../components/Layout";
import DetailForm from "../features/detail/DetailForm";
import CommentForm from "../features/detail/CommentForm";

const Detail = () => {
  return (
    <Layout>
      <DetailForm />
      <CommentForm />
    </Layout>
  );
};
export default Detail;