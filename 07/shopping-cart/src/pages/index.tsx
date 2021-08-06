import { Menu, Dropdown, Button, Spin, Drawer,Badge, Avatar } from 'antd';
import { DownOutlined } from '@ant-design/icons'
import Sizes from "../components/sizes"
import { useEffect, useState } from 'react';
import styles from './index.less';
export default function IndexPage() {
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
  const [visible, setVisible] = useState(false);
  const traggleShowDrawer = () => {
    setVisible(!visible);
  };



  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://react-shopping-cart-67954.firebaseio.com/products.json').then(res => res.json()).then(res => { setData(res.products); setLoading(false) }
    ).catch(error => console.log(error)
    )
  }, [])

  return <>
    {
      loading ? <div className={styles.loading}>
        <Spin size='large' />
      </div> :
        <>
          {/* <Sizes /> */}

          {/* 主体内容展示区域*/}
          <div className={styles.content}>
            <div className={styles.header}>
              <small>{data.length} Product(s) found.</small>
              <div className={styles.orderBy}>
                <Dropdown overlay={menu} placement="bottomLeft" trigger={['click']}>
                  <Button>Select <DownOutlined /></Button>
                </Dropdown>
              </div>
            </div>
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
          </div>

          {/* 侧边栏 */}
            <Button type="primary" onClick={traggleShowDrawer} className={styles['aside-button']}>
              Open
            </Button>
            <Drawer
              title={<>
              <Button className={styles['drawer-button']} type="primary" onClick={traggleShowDrawer}>Open</Button>
              <div className={styles['header-cart']}><Badge offset={['0','40px']} count={1} color={"#EABF00"} showZero={true} size={'small'}><Avatar shape="square" size="large" src={require('../static/bag-icon.png')}></Avatar></Badge><span style={{marginLeft:"20px"}}>Cart</span></div>
              </>}
              placement="right"
              closable={false}
              getContainer={'#root'}
              visible={visible}
              contentWrapperStyle={{width:"500px"}}
              className={styles['aside']}
              mask={false}
              headerStyle={{height:"130px",backgroundColor:"#1B1A20"}}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Drawer>
        </>
    }
  </>
}
