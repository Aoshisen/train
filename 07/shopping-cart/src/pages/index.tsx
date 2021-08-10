import { Menu, Dropdown, Button, Spin, Drawer, Badge, Avatar, Radio } from 'antd';
import { DownOutlined } from '@ant-design/icons'
import Sizes from "../components/sizes"
import { useEffect, useState } from 'react';
import styles from './index.less';
let IndexPage=() =>{
  //下拉菜单
  const menu = (
    <Menu>
      <Menu.Item key={0}>
        <a target="_blank" rel="noopener noreferrer" href="#">
          Select
        </a>
      </Menu.Item>
      <Menu.Item key={1}>
        <a target="_blank" rel="noopener noreferrer" href="#">
          Lowest to highest
        </a>
      </Menu.Item>
      <Menu.Item key={2}>
        <a target="_blank" rel="noopener noreferrer" href="#">
          Highest to lowest
        </a>
      </Menu.Item>
    </Menu>
  );
  //抽屉
  const [visible, setVisible] = useState(true);
  const traggleShowDrawer = () => {
    setVisible(!visible);
  };
  
  //定义数据以及loading状态
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(true);


  //拿到数据
  useEffect(() => {
    fetch('https://react-shopping-cart-67954.firebaseio.com/products.json').then(res => res.json()).then(res => { setData(res.products); setLoading(false) }
    ).catch(error => console.log(error)
    )
  }, [])
  return  <>
        {/* 主体内容展示区域*/}
        <div className={styles.content}>
          {/* 左边尺寸表 */}
          <Sizes />
          {/* 中间主体区域头部 */}
          <div className={styles.header}>
            <small>{data.length} Product(s) found.</small>
            <div className={styles.orderBy}>
              <Dropdown overlay={menu} placement="bottomLeft" trigger={['click']}>
                <Button>Select <DownOutlined /></Button>
              </Dropdown>
            </div>
          </div>
          {
            // 主体区域列表
            loading ? <div className={styles.loading}>
              <Spin size='large' />
            </div> :
              <div className={styles['self-group']}>
                {
                  data.map((item, index) => {
                    let { sku, price, isFreeShipping, installments, currencyFormat, title } = item as any
                    return <div className={styles["self-item"]} key={index}>
                      <img src={require(`../static/products/${sku}_1.jpg`)} alt="" />
                      <div className={styles['self-item-title']}>
                        <div className={styles['after']}>
                          {title}
                        </div>
                      </div>
                      <div className={styles['item-val']}>
                        <small>{currencyFormat}</small>
                        <b>{parseInt(price)}</b>
                        <span>.{Math.round((price.toFixed(2) - parseInt(price)) * 100) ? Math.round((price.toFixed(2) - parseInt(price)) * 100) : '00'}</span>
                      </div>
                      {installments ? <div className={styles['item-installment']}><span>or {installments} x</span><b>{`${currencyFormat}${(price / installments).toFixed(2)}`}</b></div> : <div className={styles['placeholder']}></div>}
                      <Button className={styles['item-btn']}>Add to Cart</Button>
                      {isFreeShipping ? <div className={styles['item-free']}>Free shipping</div> : ''}
                    </div>
                  })
                }
              </div>
          }

        </div>
        {/* 侧边栏 */}
        {/* <Button type="primary" onClick={traggleShowDrawer} className={styles['aside-button']}>
              Open
            </Button> */}
        <Drawer
          title={<>
            {
              !visible ? <Button className={styles['drawer-button']} type="primary" onClick={traggleShowDrawer}><Badge offset={['0', '35px']} count={1} color={"#EABF00"} showZero={true}><Avatar shape="square" src={require('../static/bag-icon.png')}></Avatar></Badge></Button> :
                <Button className={styles['drawer-button']} type="primary" onClick={traggleShowDrawer}>X</Button>
            }
            <div className={styles['header-cart']}><Badge offset={['0', '40px']} count={1} color={"#EABF00"} showZero={true} size={'small'}><Avatar shape="square" size="large" src={require('../static/bag-icon.png')}></Avatar></Badge><span style={{ marginLeft: "20px" }}>Cart</span></div>
          </>}
          placement="right"
          closable={false}
          getContainer={'#root'}
          visible={!visible}
          contentWrapperStyle={{ width: "480px" }}
          className={styles['aside']}
          mask={false}
          headerStyle={{ height: "130px", backgroundColor: "#1B1A20", border: "none" }}
          bodyStyle={{ backgroundColor: "#1B1A20", padding: "0" }}
        >
          <div className={styles['cart-item']}>
            <img src={require(`../static/products/876661122392077_2.jpg`)} alt="" />
            <div className={styles['item-center']}>
              <p className={styles['center-title']}>Cat Tee Black T-Shirt</p>
              <p className={styles['center-desc']}>S | Black with custom print<br />
                Quantity: 1
              </p>
            </div>
            <div className={styles['item-right']}>
              <p>$ 10.90</p>
              <div className={styles['btn-group']}>
                <Button className={styles['disabled']}>-</Button>
                <Button className={styles['add']}>+</Button>
              </div>
            </div>
          </div>
        </Drawer>
      </>
}
export default IndexPage;