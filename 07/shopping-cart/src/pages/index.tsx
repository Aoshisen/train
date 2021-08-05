import styles from './index.less';
// import { Button, Radio } from 'antd';
// import { StarOutlined } from '@ant-design/icons'
import { DownOutlined } from '@ant-design/icons'



import { Menu, Dropdown, Button } from 'antd';
export default function IndexPage() {
  // const sizes=['XS','S','M','ML','L','XL','XXL']
  const menu = (
    <Menu>
      <Menu.Item key={0}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Select
        </a>
      </Menu.Item>
      <Menu.Item key={1}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          Lowest to highest
        </a>
      </Menu.Item>
      <Menu.Item key={2}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Highest to lowest
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    // <div className={styles.filters}>
    //   <h4 className={styles.title}>Sizes:</h4>
    //   <div className={styles['filters-group']}>{
    //     sizes.map((item,index)=>{
    //       return <div className={styles['filters-item']} key={item}>{item}</div>
    //     })
    //   }</div>

    //   <div className="star">
    //     <small>Leave a star on Github if this repository was useful :)</small>
    //     <Radio.Group>
    //       <Radio.Button value="star" style={{backgroundColor:"#E9EBEF"}}><StarOutlined /><a href="https://github.com/jeffersonRibeiro/react-shopping-cart" target="_blank" rel="noopener noreferrer">star</a></Radio.Button>
    //       <Radio.Button value="1748"><a href="https://github.com/jeffersonRibeiro/react-shopping-cart/stargazers" target="_blank" rel="noopener noreferrer">1,748</a></Radio.Button>
    //     </Radio.Group>
    //   </div>
    // </div>
    <div className={styles.content}>
      <div className={styles.header}><small>16 Product(s) found.</small>
        <div className={styles.orderBy}>
          <Dropdown overlay={menu} placement="bottomLeft" trigger={['click']}>
            <Button>Select <DownOutlined /></Button>
          </Dropdown>
        </div>
      </div>
      <div className={styles['self-group']}>
        <div className={styles["self-item"]}>
          <img src="	https://react-shopping-cart-67954.firebaseapp.com/static/media/11600983276356164_1.06ec2c62.jpg" alt="" />
          <div className={styles['self-item-title']}>
            <div className={styles['after']}>
            Crazy Monkey Grey
            </div>
          </div>
          <div className={styles['item-val']}>
          $134.90
          </div>
          <div className={styles['item-installment']}>or 5x$26.98</div>
          <Button className={styles['item-btn']}>Add to Cart</Button>
          <span className={styles['item-free']}>Free shipping</span>
        </div>
      </div>
    </div>
  );
}
