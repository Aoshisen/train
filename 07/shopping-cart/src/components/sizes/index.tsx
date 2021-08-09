import styles from './index.less';
import { Button, Radio } from 'antd';
import { StarOutlined } from '@ant-design/icons'
export default function Sizes() {
      const sizes=['XS','S','M','ML','L','XL','XXL']
    return (
        <div className={styles.filters}>
          <h4 className={styles.title}>Sizes:</h4>
          <div className={styles['filters-group']}>{
            sizes.map((item,index)=>{
              return <div className={styles['filters-item']} key={item}>{item}</div>
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