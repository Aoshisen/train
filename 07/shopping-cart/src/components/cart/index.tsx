import React, { useState } from "react";
import { Menu, Dropdown, Button, Spin, Drawer, Badge, Avatar, Radio } from 'antd';
import {connect} from "umi"


import styles from "./index.less"



let Cart = ({cart,dispatch}) => {
    const [visible, setVisible] = useState(false);
    const traggleShowDrawer = () => {
        setVisible(!visible);
    };
    console.log(cart,'cart-Cart=dadasd');
    let {goods}=cart
    let caculateSum=(someArray)=>{
        return someArray.length==0?0:someArray.reduce((accumulator,currentValue)=>{
            console.log(accumulator,'accumulator');
            
            return accumulator+(currentValue.good.price)*(currentValue.count)
        })(0)
    }
    console.log(caculateSum(goods),"count");
    
    return <>
        <Button type="primary" onClick={({ target }) => {
            traggleShowDrawer(),
            target.remove()
            // console.log(target);
            
        }} className={styles['aside-button']}>
            {/* Open */}
            <Badge offset={['0', '30px']} count={goods.length} color={"#EABF00"} showZero={true}><Avatar shape="square" src={require('@/static/bag-icon.png')}></Avatar></Badge>
        </Button>
        <Drawer
            placement="right"
            closable={false}
            getContainer={'#root'}
            contentWrapperStyle={{ width: "480px" }}
            visible={visible}
            className={styles['aside']}
            mask={false}
            bodyStyle={{ backgroundColor: "#1B1A20", padding: "0" }}
        >
            {/* 左边小按钮 */}
            {
                !visible ? <Button className={styles['drawer-button']} type="primary" onClick={traggleShowDrawer}><Badge offset={['0', '30px']} count={goods.length} color={"#EABF00"} showZero={true}><Avatar shape="square" src={require('@/static/bag-icon.png')}></Avatar></Badge></Button> :
                    <Button className={styles['drawer-button-small']} type="primary" onClick={traggleShowDrawer}>X</Button>
            }
            {/* 顶部小车车 */}
            <div className={styles['header-cart']}><Badge offset={['0', '40px']} count={goods.length} color={"#EABF00"} showZero={true} size={'small'}><Avatar shape="square" size="large" src={require('@/static/bag-icon.png')}></Avatar></Badge><span style={{ marginLeft: "20px" }}>Cart</span></div>
            {
                goods.map((item, index) => {
                    console.log(item);
                    
                    let {count,good:{title,style,price,sku,id}}=item;
                    return <div className={`${styles['cart-item']}`} key={index}>
                        <img src={require(`@/static/products/${sku}_2.jpg`)} alt="" />
                        <div className={styles['self-item-del']} onClick={()=>{
                            dispatch({
                                type:"cart/delete",
                                payload:{
                                    id,
                                }
                            })
                        }}></div> 
                        <div className={styles['item-center']}>
                            <p className={styles['center-title']}>{title}</p>
                            <p className={styles['center-desc']}>S | {style}<br />
                                Quantity: {count}
                            </p>
                        </div>
                        <div className={styles['item-right']}>
                            <p>$ {price.toFixed(2)}</p>
                            <div className={styles['btn-group']}>
                                <Button className={count<=1?styles['disabled']:styles['add']} onClick={()=>{
                                    dispatch({
                                        type:'cart/min',
                                        payload:{
                                            good:item.good
                                        }
                                    })
                                }}>-</Button>
                                <Button className={styles['add']} onClick={()=>{
                                    dispatch({
                                        type:'cart/add',
                                        payload:{
                                            good:item.good
                                        }
                                    })
                                }}>+</Button>
                            </div>
                        </div>
                        
                    </div>
                })
            }
            {/* 底部footer */}
            <div className={styles['aside-footer']}>
                <div className={styles['sub']}>SUBTOTAL</div>
                <div className={styles['sub-price']}>
                    {/* <div className={styles['sub-price-val']}>$ {caculateSum(goods)}</div> */}
                    <small>OR UP TO 5 x $ 31.48</small>
                </div>
                <div className={styles['buy-btn']}>
                    Checkout
                </div>
            </div>
        </Drawer>
    </>

}

const mapStateToProps=({cart})=>{
    // console.log(cart,'cart-Cart');
    return {cart}
}
export default connect(mapStateToProps)(Cart);