const nav = [
    {
        name: "popular",
        path: "/",
        render(props){
            return <div> This is 热门项目</div>
        }
    },
    {
        name: "battle",
        path: "/battle",
        render(props){
            // return <Battle />
        }
    }
]

const types=['all','good','share','ask','job','dev']

const indexHeadNav=[{
    name:"全部",
    url:"/?tab=all"
},{
    name:"精华",
    url:"/?tab=good"
},{
    name:"分享",
    url:"/?tab=share"
},{
    name:"问答",
    url:"/?tab=ask"
},{
    name:"招聘",
    url:"/?tab=job"
},{
    name:"客户端测试",
    url:"/?tab=dev"
},
]
export {nav,types,indexHeadNav}