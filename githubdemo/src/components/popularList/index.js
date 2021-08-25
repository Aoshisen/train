import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Alert } from "antd";
import "antd/dist/antd.css";

import InfiniteScroll from "react-infinite-scroller";

import qs from "qs";
import ListItem from "../listItem/index";

import "./index.less";

const urls = {
  all: "stars:%3E1",
  javascript: "stars:%3E1+language:javascript",
  ruby: "stars:%3E1+language:ruby",
  java: "stars:%3E1+language:java",
  css: "stars:%3E1+language:css",
  python: "stars:%3E1+language:python",
};
const PopularList = () => {
  const { search } = useLocation();
  const { tab = "all" } = qs.parse(search.substr(1));
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  // 页面跳转副作用
  useEffect(() => {
    setData([]);
    setCurrentPage(1);
    console.log("useEffect====>tab切换");
  }, [tab]);
  const loadMore = (page) => {
    if (error) {
      return;
    }
    console.log(page, "loadmore");
    if (page > 1) {
      fetch(
        `https://api.github.com/search/repositories?q=${urls[tab]}&sort=starts&order=desc&type=Repositories&page=${currentPage}`
      )
        .then((res) => res.json())
        .then((res) => {
          setError(res.message);
          console.log(page, "successLoadMore");
          setData([...data, ...res.items]);
          setCurrentPage(currentPage + 1);
        });
    }
  };
  useEffect(() => {
    // loadMore();
  }, [currentPage]);

  return !error ? (
    <InfiniteScroll
      pageStart={0}
      loadMore={(page) => loadMore(page)}
      hasMore={true || false}
      loader={
        <div className="wrapper" key={currentPage}>
          <div className="rubik-loader" />
        </div>
      }
    >
      <div className="content">
        {data &&
          data.map((item, index) => (
            <ListItem key={index} data={item} id={index} />
          ))}
      </div>
    </InfiniteScroll>
  ) : (
    <Alert
      message={error}
      //  description={error}
      type="error"
      closable
    />
  );
};
export default PopularList;
