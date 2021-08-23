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
  let {useState} =React;
const IndexPage=()=>{
    let {search='?tab=all'}=location
    let type=search.substr(5)
    // console.log(search.substr(5));
    let [currentPage,setCurrentPage]=useState(1)
    let [data,setData]=useState([])
    // console.log(currentPage);
    fetch(`https://api.github.com/search/repositories?q=${urls.all}&sort=starts&order=desc&type=Repositories&page=${1}`).then(res=>res.json()).then(res=>setData([...res.items]))
    return <div className="indexPade">
          <div className='header'>
        {
            indexHeadNav.map((item,index)=>{
                return <a className="header-item" key={index} href={`/index.html${item.url}`}>{item.name}</a>
            })
        }
    </div>
    <div className="content">
        {
            data&&data.map((item,index)=>{
                console.log(item);
            })
        }
    </div>
    </div>
}

const domContainer = document.getElementById('root');
ReactDOM.render(<IndexPage />, domContainer);