import React, { Component } from 'react'
import { Route, Link, Switch } from "react-router-dom"


import ListItem from './components/list-item/index.js'
import Header from './components/header'
import Page404 from "./pages/page404/index"
import Battle from "./pages/battle/index"


import { routes } from './routes.js'
import './App.css'
class App extends Component {
    state = {
        datas: []
    }
    async componentDidMount() {
        fetch("https://api.github.com/search/repositories?q=stars:%3E1&sort=starts&order=desc&type=Repositories").then(res =>
            res.json()
        ).then(res => this.setState({
            datas: res.items
        }))
    }
    render() {
        let { datas } = this.state
        return <>
            <nav>
                {routes.map((item, index) => {
                    return <Link to={item.to} key={index}>{item.content}</Link>
                })}
            </nav>
            <Switch>
                <Route path={['/', "/popular", '/index']} exact
                    render={() => <>
                        <Header />
                        <div className="content">
                            {datas.map((item, index) => {
                                console.log(item);
                                return <ListItem key={index} data={{ ...item, id: index }} />
                            })}
                        </div>
                    </>}
                />
                <Route path='/battle' exact component={ Battle }/>
                <Route component={Page404} />
            </Switch>

        </>
    }

}
export default App