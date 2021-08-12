import React, { Component } from "react"
import { NavLink, Switch, useHistory, useLocation } from "react-router-dom"
import { nav } from "../router.js"
import qs from 'qs'

let Header = () => {
    let {pathname} =useLocation()
    console.log(qs.parse(pathname.substr(1)));
    return (<Switch>
        <>
        {nav.map((item,index)=>{
            return <NavLink to={item.path} key={index} activeStyle={{color:"red"}} style={{width:'200px',marginRight:"50px"}} isActive={false}>{item.name}</NavLink>
        })}
        </>
    </Switch>)
}
export default Header;