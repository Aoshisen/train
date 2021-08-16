import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import InfiniteScroll from 'react-infinite-scroller';

import qs from 'qs';
import ListItem from '../listItem/index';

import './index.css';

const urls = {
  all: 'stars:%3E1',
  javascript: 'stars:%3E1+language:javascript',
  ruby: 'stars:%3E1+language:ruby',
  java: 'stars:%3E1+language:java',
  css: 'stars:%3E1+language:css',
  python: 'stars:%3E1+language:python'
};
const PopularList = () => {
  const { search } = useLocation();
  const { tab = 'all' } = qs.parse(search.substr(1));
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const loadFunc = (type, page) => fetch(`https://api.github.com/search/repositories?q=${urls[type]}&sort=starts&order=desc&type=Repositories&page=${page}`).then((res) => {
    if (!res.ok) {
      console.log('捕获到了错误');
      throw new Error('请求太快了，请稍后重试');
    } else {
      return res.json();
    }
  }).then((res) => res.items).catch((err) => {
    setError(err);
  });
  // 页面跳转副作用
  useEffect(()=>{
    setData([]);
    setCurrentPage(1);
    loadFunc(tab, 1).then((res) => { res && setData(res)})//eslint-disable-line
  },[tab]);
  const loadMore = () => {
    // 这里不能写封装好了的请求函数，原因不明确
    if (error) {
      alert(error);
      return;
    }
    fetch(`https://api.github.com/search/repositories?q=${urls[tab]}&sort=starts&order=desc&type=Repositories&page=${currentPage}`).then((res) => res && res.json()).then((res) => { setData([...data, ...res.items]);
      setCurrentPage(currentPage + 1);
    });
    // loadFunc(tab,currentPage).then(res=>{
    //         res && setData([...data, ...res.items]);
    //     setCurrentPage(currentPage + 1)
    // })
  };
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadMore}
      hasMore={true || false}
      loader={(
        <div className="wrapper" key={currentPage}>
          <div className="rubik-loader" />
        </div>
          )}
    >
      <div className="content">
        {
                data && data.map((item, index) => <ListItem key={index} data={item} id={index} />)
            }
      </div>
    </InfiniteScroll>
  );
};
export default PopularList;
