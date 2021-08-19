import styles from './index.less';
import { useState } from 'react';
import { Button, Radio } from 'antd';
import {connect} from "umi";
import { StarOutlined } from '@ant-design/icons'
const Sizes=({products,dispatch,orderBy,setFilterdSizes}) =>{
      const sizes=['XS','S','M','ML','L','XL','XXL']
      let [sizeList,setSizeList]=useState(Array(7).fill(false))
      // console.log(orderBy,"size");
      // let sizeList=Array(7).fill(false)
      // console.log(products);
      // console.log("重新渲染");
      return (
        <div className={styles.filters} onClick={()=>{
          let filterdSizes=sizes.filter((item,index)=>{
            return sizeList[index]
          })
          setFilterdSizes(filterdSizes)
          // console.log(filterdSizes);
          dispatch({
            type:"products/filter",
            payload:{
              filterdSizes,
              orderBy
            }
          })
        }}>
          <h4 className={styles.title}>Sizes:</h4>
          <div className={styles['filters-group']}>{
            sizes.map((item,index)=>{
              return <div className={!sizeList[index]?styles['filters-item']:styles['filters-item-active']} key={index} onClick={()=>{
                let _sizeList=sizeList
                _sizeList[index]=!_sizeList[index]
                setSizeList([..._sizeList])
              }}>{item}</div>
            })
          }</div>
          <div className={styles['star']}>
            <small>Leave a star on Github if this repository was useful :)</small><br />
            <Radio.Group>
              <Radio.Button value="star" style={{backgroundColor:"#E9EBEF"}}><StarOutlined /><a href="https://github.com/jeffersonRibeiro/react-shopping-cart" target="_blank" rel="noopener noreferrer">star</a></Radio.Button>
              <Radio.Button value="1748"><a href="https://github.com/jeffersonRibeiro/react-shopping-cart/stargazers" target="_blank" rel="noopener noreferrer">1,748</a></Radio.Button>
            </Radio.Group>
          </div>
        </div>
        )

}
const mapStateToProps=({products})=>{
  return {products}
  }
  
  export default connect(mapStateToProps)(Sizes)