import React, { Component } from "react"

import "./index.css"
class Header extends Component {
    state={classData:["All","JavaScript","Ruby","Java","CSS","Python"],activeIndex:0}
    handleClick=(index)=>this.setState({activeIndex:index})
    render() {
        console.log(typeof this.state.activeIndex);
        return <div className='header'>
            <ul className="classification">
                {this.state.classData.map((item,index)=><li key={index} className={this.state.activeIndex===index?"active":""} onClick={()=>{
                    this.handleClick(index)
                }}>{item}</li>)}
            </ul>
        </div>
    }
}
export default Header