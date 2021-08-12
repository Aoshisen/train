import React, { Component } from 'react'
import { Route, Switch, NavLink } from "react-router-dom"
import InfiniteScroll from 'react-infinite-scroller';


import ListItem from './components/list-item/index.js'
import Page404 from "./pages/page404/index"
import Battle from "./pages/battle/index"
import { routes } from './routes.js'


import './App.css'

const urls = {
    all: "stars:%3E1",
    javascript: "stars:%3E1+language:javascript",
    ruby: "stars:%3E1+language:ruby",
    java: "stars:%3E1+language:java",
    css: "stars:%3E1+language:css",
    python: "stars:%3E1+language:python",
}
class App extends Component {
    state = {
        datas: [],
        currentPage: 1,
        loading: true,
        classData: ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"],
        activeIndex: 0,
        err_msg: ""
    }
    handleClick = (index) => {
        this.setState({ activeIndex: index })
        this.setState({ currentPage: 1 })
        this.setState({ datas: [] })
    }
    loadFunc = () => {
        if (!this.state.err_msg) {
            fetch(`https://api.github.com/search/repositories?q=${urls[this.state.classData[this.state.activeIndex].toLowerCase()]}&sort=starts&order=desc&type=Repositories&page=${this.state.currentPage}`).then(res =>
                res.json()
            ).then(res => res && this.setState({
                currentPage: this.state.currentPage + 1,
                datas: [...this.state.datas, ...res.items]
            }))
        }
    }

    render() {
        let { datas } = this.state
        return <>
            {/* 一级导航 */}
            <nav>
                {routes.map((item, index) => {
                    return <NavLink to={item.to} key={index} className="first-nav" activeStyle={{ color: "red" }}>{item.content}</NavLink>
                })}
            </nav>
            <Switch>
                <Route path={['/', "/popular", '/index']} exact
                    render={() => <>
                        {/* 首部二级导航 */}
                        <div className='header'>
                            <ul className="classification">
                                {this.state.classData.map((item, index) =>
                                    <li key={index} className={this.state.activeIndex === index ? "active" : ""} onClick={() => {
                                        this.handleClick(index)
                                    }}>{item}</li>
                                )}
                            </ul>
                        </div>
                        {/* 无限滚动视图 */}
                        <InfiniteScroll
                            pageStart={0}
                            loadMore={this.loadFunc}
                            hasMore={true || false}
                            loader={
                                <div className="wrapper" key={this.state.currentPage}>
                                    <div className="rubik-loader"></div>
                                </div>
                            }
                        >
                            <div className="content">
                                {datas && datas.map((item, index) => {
                                    return <ListItem key={index} data={{ ...item, id: index }} />
                                })}
                            </div>
                        </InfiniteScroll>
                    </>}
                />
                <Route path={['/battle']} component={Battle} />
                <Route component={Page404} />
            </Switch>
        </>
    }

}
export default App