import React, { useState } from "react";
import { Menu, Dropdown, Button, Spin, Drawer, Badge, Avatar, Radio } from 'antd';
import { connect } from "umi"

import styles from "./index.less"

let Cart = ({ cart, dispatch }) => {
    const [visible, setVisible] = useState(false);
    const traggleShowDrawer = () => {
        setVisible(!visible);
    };
    let { goods } = cart
    console.log(goods, "<===goods");
    const caculateSum = (someArray) => {
        console.log(someArray, "<=======someArray");
        let sum = 0;
        someArray.forEach((item, index) => {
            sum += item.good.price * item.count
        })
        return sum
    }

    let installments = goods[0] ? goods[0].good.installments : undefined
    return <>
        <Button type="primary" onClick={({ target }) => {
            traggleShowDrawer(),
                target.remove()
        }} className={styles['aside-button']}>
            {/* Open */}
            <Badge offset={['0', '30px']} count={goods.length} color={"#EABF00"} showZero={true}><Avatar shape="square" src={require('@/static/bag-icon.png')}></Avatar></Badge>
        </Button>
        <Drawer
            placement="right"
            closable={false}
            getContainer={'#root'}
            contentWrapperStyle={{ width: "440px" }}
            visible={visible}
            className={styles['aside']}
            mask={false}
            bodyStyle={{ backgroundColor: "#1B1A20", padding: "0" }}
            footer={<div className={styles['aside-footer']}>
                <div className={styles['sub']}>SUBTOTAL</div>
                <div className={styles['sub-price']}>
                    <div className={styles['sub-price-val']}>$ {caculateSum(goods).toFixed(2)}</div>
                    {installments ? <small>OR UP TO {installments} x $ {(caculateSum(goods) / installments).toFixed(2)}</small> : ""}
                </div>
                <div className={styles['buy-btn']} onClick={() => {
                    (caculateSum(goods)) ? alert(`Checkout - Subtotal: $ ${caculateSum(goods).toFixed(2)}`) : ""
                    dispatch({
                        type: "cart/deleteAll"
                    })
                }}>
                    Checkout
                </div>
                </div>
            }
        >
            {/* 左边小按钮 */}
            {
                !visible ? <Button className={styles['drawer-button']} type="primary" onClick={traggleShowDrawer}><Badge offset={['0', '30px']} count={goods.length} color={"#EABF00"} showZero={true}><Avatar shape="square" src={require('@/static/bag-icon.png')}></Avatar></Badge></Button> :
                    <Button className={styles['drawer-button-small']} type="primary" onClick={traggleShowDrawer}>X</Button>
            }

            {/* 顶部小车车 */}
            <div className={styles['header-cart']}><Badge offset={['0', '40px']} count={goods.length} color={"#EABF00"} showZero={true} size={'small'}><Avatar shape="square" size="large" src={require('@/static/bag-icon.png')}></Avatar></Badge><span style={{ marginLeft: "20px" }}>Cart</span></div>
            {
                goods.length>0 ? goods.map((item, index) => {
                    console.log(item);
                    let { count, good: { title, style, price, sku, id } } = item;
                    return <div className={`${styles['cart-item']}`} key={index}>
                        <img src={require(`@/static/products/${sku}_2.jpg`)} alt="" />
                        <div className={styles['self-item-del']} onClick={() => {
                            dispatch({
                                type: "cart/delete",
                                payload: {
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
                                <Button className={count <= 1 ? styles['disabled'] : styles['add']} onClick={() => {
                                    dispatch({
                                        type: 'cart/min',
                                        payload: {
                                            good: item.good
                                        }
                                    })
                                }}>-</Button>
                                <Button className={styles['add']} onClick={() => {
                                    dispatch({
                                        type: 'cart/add',
                                        payload: {
                                            good: item.good
                                        }
                                    })
                                }}>+</Button>
                            </div>
                        </div>

                    </div>
             })
             :<p className={styles['shelf-empty']}>
                 Add some products in the cart 
                 <br />
                 :)
             </p>
            }
        </Drawer>
    </>

}

const mapStateToProps = ({ cart }) => {
    return { cart }
}
export default connect(mapStateToProps)(Cart);