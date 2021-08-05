import React, { Component } from 'react'
import { Route, Switch, NavLink } from "react-router-dom"


import ListItem from './components/list-item/index.js'
import Page404 from "./pages/page404/index"
import Battle from "./pages/battle/index"
import { routes } from './routes.js'
import './App.css'

const urls = [
    "stars:%3E1",
     "stars:%3E1+language:javascript",
     "stars:%3E1+language:ruby",
     "stars:%3E1+language:java",
    "stars:%3E1+language:css",
     "stars:%3E1+language:python",
]
class App extends Component {
    state = {
        datas: [],
        currentPage: 1,
        loading: true,
        classData: ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"],
        activeIndex: 0
    }
    async componentDidMount() {
        fetch(`https://api.github.com/search/repositories?q=${urls[this.state.activeIndex]}&sort=starts&order=desc&type=Repositories&page=${this.state.currentPage}`).then(res =>
            res.json()
        ).then(res => this.setState({
            datas: res.items
        })).catch((err)=>{console.log(err);})
    }
    handleClick = async (index) => {
        console.log("Asdasdadsdsasdasd");
        await this.setState({ activeIndex: index })
        this.setState({ currentPage: 1 })
        this.setState({datas:[]})
        await fetch(`https://api.github.com/search/repositories?q=${urls[this.state.activeIndex]}&sort=starts&order=desc&type=Repositories&page=${this.state.currentPage}`).then(res =>
            res.json()
        ).then(res => this.setState({
            datas: res.items
        }))
    }
    render() {
        let { datas } = this.state

        //判断滚动到了底部
        //滚动条在Y轴上的滚动距离
        function getScrollTop() {
            var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
            if (document.body) {
                bodyScrollTop = document.body.scrollTop;
            }
            if (document.documentElement) {
                documentScrollTop = document.documentElement.scrollTop;
            }
            scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
            return scrollTop;
        }
        //文档的总高度
        function getScrollHeight() {
            var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
            if (document.body) {
                bodyScrollHeight = document.body.scrollHeight;
            }
            if (document.documentElement) {
                documentScrollHeight = document.documentElement.scrollHeight;
            }
            scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
            return scrollHeight;
        }
        //浏览器视口的高度
        function getWindowHeight() {
            var windowHeight = 0;
            if (document.compatMode === "CSS1Compat") {
                windowHeight = document.documentElement.clientHeight;
            } else {
                windowHeight = document.body.clientHeight;
            }
            return windowHeight;
        }
        //给Window设置滚动事件
        window.onscroll = () => {
            if (getScrollTop() + getWindowHeight() === getScrollHeight()) {
                // 　　　　alert("我滚动到了底部")
                this.setState({ currentPage: this.state.currentPage + 1 });
                this.setState({ loading: true })
                fetch(`https://api.github.com/search/repositories?q=${urls.all}&sort=starts&order=desc&type=Repositories&page=${this.state.currentPage}`).then(res =>
                    res.json()
                ).then(res => this.setState({
                    datas: [...datas, ...res.items],
                    loading: false
                }))

            }
        };

        return <>
            <nav>
                {routes.map((item, index) => {
                    return <NavLink to={item.to} key={index} className="first-nav" activeStyle={{color:"red"}}>{item.content}</NavLink>
                })}
            </nav>
            <Switch>
                <Route path={['/', "/popular", '/index']} exact
                    render={() => <>
                        <div className='header'>
                            <ul className="classification">
                                {this.state.classData.map((item, index) => <li key={index} className={this.state.activeIndex === index ? "active" : ""} onClick={() => {
                                    this.handleClick(index)
                                }}>{item}</li>)}
                            </ul>
                        </div>
                        <div className="content">
                            {datas&&datas.map((item, index) => {
                                return <ListItem key={index} data={{ ...item, id: index }} />
                            })}
                        </div>
                        {this.state.loading ? <div>加载中请稍后......</div> : ""}
                    </>}
                />
                <Route path='/battle' exact component={Battle} />
                <Route component={Page404} />
            </Switch>
            
        </>
    }

}
export default App