//原生
import { useEffect, useState } from 'react';
//三方
import {  Spin} from 'antd';
//自定义
import Sizes from "../components/sizes"
import GoodList from "@/components/goodsList/index"
import Cart from "@/components/cart/index"

//数据引入
import {connect} from "umi";
//样式
import styles from './index.less';
let IndexPage = ({products,dispatch,loading})=> {
  let data=products.products
  let [orderBy,setOrderBy]=useState("Select")
  let [filterdSizes,setFilterdSizes] =useState([])
  // console.log(orderBy);
  return <>
    <div className={styles.content}>
      <Sizes orderBy={orderBy} setFilterdSizes={setFilterdSizes}/>
     <GoodList goodLists={data} dispatch={dispatch} setOrderBy={setOrderBy} orderBy={orderBy} loading={loading} filterdSizes={filterdSizes}/>
    </div>
    <Cart />
  </>
}

const mapStateToProps=({products,loading})=>{
// console.log(loading,products,router);
// console.log(products,'传递数据函数');
return {products,loading:loading.global}
}

export default connect(mapStateToProps)(IndexPage);