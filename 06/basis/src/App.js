import React,{Component} from 'react'
import ListItem from './components/list-item/index.js'
import Header from './components/header'
import './App.css'

class App extends Component{
    state={
        datas:[]
    }
    async componentDidMount(){
        fetch("https://api.github.com/search/repositories?q=stars:%3E1&sort=starts&order=desc&type=Repositories").then(res=>
            res.json()
        ).then(res=>this.setState({
            datas:res.items
        }))
    }
    render(){
        let {datas} =this.state
        return <>
        <Header />
        <div className="content">
        {datas.map((item,index)=>{
            console.log(item);
            return <ListItem key={index} data={{...item,id:index}}/>
        })}
        </div>
        </>
    }

}
export default App