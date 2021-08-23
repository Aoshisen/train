const urls = {
  all: 'stars:%3E1',
  javascript: 'stars:%3E1+language:javascript',
  ruby: 'stars:%3E1+language:ruby',
  java: 'stars:%3E1+language:java',
  css: 'stars:%3E1+language:css',
  python: 'stars:%3E1+language:python'
};
const indexHeadNav = [{
  name: 'All',
  url: '?tab=all',
}, {
  name: 'JavaScript',
  url: '?tab=javascript',
}, {
  name: 'Ruby',
  url: '?tab=ruby',
}, {
  name: 'Java',
  url: '?tab=java',
}, {
  name: 'CSS',
  url: '?tab=css',
}, {
  name: 'Python',
  url: '?tab=python',
},
];
let { useState, useEffect } = React;
const IndexPage = () => {
  let { search = '?tab=all' } = location
  let type = search.substr(5)?search.substr(5):"all"
  // console.log(search.substr(5));
  let [currentPage, setCurrentPage] = useState(1)
  let [data, setData] = useState([])
  function getScrollTop(){
    　　var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
    　　if(document.body){
    　　　　bodyScrollTop = document.body.scrollTop;
    　　}
    　　if(document.documentElement){
    　　　　documentScrollTop = document.documentElement.scrollTop;
    　　}
    　　scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    　　return scrollTop;
    }
    //文档的总高度
    function getScrollHeight(){
    　　var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
    　　if(document.body){
    　　　　bodyScrollHeight = document.body.scrollHeight;
    　　}
    　　if(document.documentElement){
    　　　　documentScrollHeight = document.documentElement.scrollHeight;
    　　}
    　　scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
    　　return scrollHeight;
    }
    //浏览器视口的高度
    function getWindowHeight(){
    　　var windowHeight = 0;
    　　if(document.compatMode == "CSS1Compat"){
    　　　　windowHeight = document.documentElement.clientHeight;
    　　}else{
    　　　　windowHeight = document.body.clientHeight;
    　　}
    　　return windowHeight;
    }
  const loadFunc = (type, page) => fetch(`https://api.github.com/search/repositories?q=${urls[type]}&sort=starts&order=desc&type=Repositories&page=${page}`).then((res) => res.json()).then((res) => res.items)
  useEffect(() => {
    setData([]);
    setCurrentPage(1);
    loadFunc(type, currentPage).then((res) => { res && setData(res) }) //eslint-disable-line
  }, [type]);
  window.onscroll = function(){
    　　if(getScrollTop() + getWindowHeight() == getScrollHeight()){
    // 　　　　alert("已经到最底部了！!");
            setCurrentPage(++currentPage)
           loadFunc(type, currentPage).then((res) => { res && setData([...data,...res])})
    　　}
    };    
  return <div className="indexPage">
    <div className='header'>
      {
        indexHeadNav.map((item, index) => {
          return <a key={index} href={`./index.html${item.url}`} className={type===item.name.toLocaleLowerCase()?'red':"header-item"}>{item.name}</a>
        })
      }
    </div>
    <div className="content">
      {
        data && data.map((item, index) => {
          const { forks, open_issues, stargazers_count, owner: { avatar_url, login } } = item;
          return (
            <div className="list-item" key={index}>
              <div className="title">#{index + 1}</div>
              <div className="img">
                <img alt="" src={avatar_url} />
                <div className="list-name">
                  {login}
                </div>
              </div>
              <div className="full-name">
                {/* <FontAwesomeIcon
                  icon={faUser}
                  style={{
                    color: 'green', width: '20px', marginRight: '5px', marginLeft: '20%',
                  }}
                /> */}
                <i className="fa fa-user"  style={{
                    color: 'green', width: '20px', marginRight: '5px', marginLeft: '20%',
                  }}></i> 
                {login}
              </div>
              <div className="star">
                {/* <FontAwesomeIcon
                  icon={faStar}
                  style={{
                    color: 'yellow', width: '20px', marginRight: '5px', marginLeft: '20%',
                  }}
                /> */}
                <i className="fa fa-star"  style={{
                    color: 'yellow', width: '20px', marginRight: '5px', marginLeft: '20%',
                  }}></i> 
                {stargazers_count} stars
              </div>
              <div className="branch">
                {/* <FontAwesomeIcon
                  icon={faCodeBranch}
                  style={{
                    color: 'blue', width: '20px', marginRight: '5px', marginLeft: '20%',
                  }}
                /> */}
                <i className="fa fa-code-fork"  style={{
                    color: 'blue', width: '20px', marginRight: '5px', marginLeft: '20%',
                  }}></i> 
                {forks} forks
              </div>
              <div className="issue">
                {/* <FontAwesomeIcon
                  icon={faExclamationTriangle}
                  style={{
                    color: 'red', width: '20px', marginRight: '5px', marginLeft: '20%',
                  }}
                /> */}
                <i className="fa fa-exclamation-triangle"  style={{
                    color: 'red', width: '20px', marginRight: '5px', marginLeft: '20%',
                  }}></i> 
                {open_issues}open issues
              </div>
            </div>
          )
        })
      }
    </div>
  </div>
}

const domContainer = document.getElementById('root');
ReactDOM.render(<IndexPage />, domContainer);