import React,{Component} from "react"

//自己定义的组件
import Header from "./components/header.js"

import "./App.css";


class App extends Component{
    render(){
        return <>
        <Header />
        {/* <button>this is App</button> */}
        </>
    }
}
export default App;