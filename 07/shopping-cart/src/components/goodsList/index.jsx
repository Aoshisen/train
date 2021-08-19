import React from "react"
import { DownOutlined } from '@ant-design/icons'
import { Menu, Dropdown, Button, Spin, Drawer, Badge, Avatar, Radio } from 'antd';

import styles from "./index.less"
import { useState } from "react";
import {connect} from "umi"

//下拉菜单

let GoodsList = (props) => {
    // console.log(props);
    let { goodLists, loading, dispatch, setOrderBy,filterdSizes } = props;
    // console.log(loading,'loading');
    const orderByList = ['Select', "Lower", "High"]
    const orderByListName = ['Select', "Lowest to highest", "Highest to lowest"]
    let [selectKey, setSelectKey] = useState(0);
    const menu = (
        <Menu onClick={({ key }) => {
            setOrderBy(orderByList[key])
            setSelectKey(key)
            console.log(orderByList[key]);
            dispatch({
                type: 'products/filter',
                payload: {
                    orderBy: orderByList[key],
                    filterdSizes,
                }
            })
        }}>
            <Menu.Item key={0}>
                Select
            </Menu.Item>
            <Menu.Item key={1}>
                Lowest to highest
            </Menu.Item>
            <Menu.Item key={2}>
                Highest to lowest
            </Menu.Item>
        </Menu>
    );
    return <>
        <div className={styles.header}>
            <small>{goodLists && goodLists.length} Product(s) found.</small>
            <div className={styles.orderBy}>
                <Dropdown overlay={menu} placement="bottomLeft" trigger={['click']}>
                    <Button>{orderByListName[selectKey]} <DownOutlined /></Button>
                </Dropdown>
            </div>
        </div>
        {loading ?
            <div className={styles.loading}>
                <Spin size='large' />
            </div>
            :
            <div className={styles['self-group']}>
                {
                    goodLists && goodLists.map((good, index) => {
                        let { sku, price, isFreeShipping, installments, currencyFormat, title, availableSizes } = good
                        return <div className={styles["self-item"]} key={index}>
                            <img src={require(`@/static/products/${sku}_1.jpg`)} alt="" />
                            <div className={styles['self-item-title']}>
                                <div className={styles['after']}>
                                    {title}
                                </div>
                            </div>
                            <small className={styles['availableSizes']}>Sizes:{
                                availableSizes.map(item => `${item} `)}</small>
                            <div className={styles['item-val']}>
                                <small>{currencyFormat}</small>
                                <b>{parseInt(price)}</b>
                                <span>.{Math.round((price.toFixed(2) - parseInt(price)) * 100) ? Math.round((price.toFixed(2) - parseInt(price)) * 100) : '00'}</span>
                            </div>
                            {installments ? <div className={styles['item-installment']}><span>or {installments} x</span><b>{`${currencyFormat}${(price / installments).toFixed(2)}`}</b></div> : <div className={styles['placeholder']}></div>}
                            <Button className={styles['item-btn']} onClick={()=>{
                                console.log("点击了购买按钮");
                                dispatch({
                                    type:'cart/add',
                                    payload:{good}
                                })
                            }}>Add to Cart</Button>
                            {isFreeShipping ? <div className={styles['item-free']}>Free shipping</div> : ''}
                        </div>
                    })
                }
            </div>
        }
    </>
}
const mapStateToProps=({cart})=>{
    return {cart}
}
export default connect(mapStateToProps)(GoodsList);