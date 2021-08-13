import React from "react"
import { NavLink ,Switch, useLocation} from "react-router-dom"
import {indexHeadNav} from "../../router"

import qs from 'qs'

import "./index.css"

let SecondHeader=()=>{
    let {search} =useLocation()
    console.log(qs.parse(search.substr(1)));
    let {tab='all'}=qs.parse(search.substr(1))
    return <header>
    <div className='header'>
    {
        indexHeadNav.map((item,index)=>{
            return <NavLink to={item.url} className='headerItem' key={index}defaultValue={0} activeStyle={{color:"red"}} exact isActive={()=>{
                return tab==item.name.toLowerCase()
            }}>{item.name}</NavLink>
        })
    }
    </div>
    </header>

    
}
export default SecondHeader