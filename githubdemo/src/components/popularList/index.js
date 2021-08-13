import React, { useEffect, useState } from "react"
import { useLocation } from 'react-router'

import ListItem from "../listItem/index"

import qs from "qs"

import "./index.css"

const urls = {
    all: "stars:%3E1",
    javascript: "stars:%3E1+language:javascript",
    ruby: "stars:%3E1+language:ruby",
    java: "stars:%3E1+language:java",
    css: "stars:%3E1+language:css",
    python: "stars:%3E1+language:python",
}
const loadFunc = (type, page) => {
     return fetch(`https://api.github.com/search/repositories?q=${urls[type]}&sort=starts&order=desc&type=Repositories&page=${page}`).then(res =>
        res.json()
    ).then(res => res.items)
}

const PopularList = () => {
    let { search } = useLocation();
    let { tab = 'all' } = qs.parse(search.substr(1));
    let [currentPage, setCurrentPage] = useState(1);
    let [data, setData] = useState([]);
    let [loading, setLoading] = useState(true)
    useEffect(() => {
        setData([]);
        setCurrentPage(1);
        setLoading(true);
        loadFunc(tab, currentPage).then(res => { setData(res), setLoading(false) })
    }, [tab])
    return <div className="content">
        {
            loading ? <div className="wrapper" key={currentPage}>
                <div className="rubik-loader"></div>
            </div> :
                data && data.map((item, index) => <ListItem key={index} {...item} id={index} />)
        }
    </div>
}
export default PopularList;