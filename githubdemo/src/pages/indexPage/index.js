import React from "react";
import SecondHeader from "../../components/secondHeader";
import PopularList from "../../components/popularList/index";

const IndexPage = () => (
  <div>
    <SecondHeader />
    <br />
    {/* 文字 */}
    <PopularList />
  </div>
);

export default IndexPage;
