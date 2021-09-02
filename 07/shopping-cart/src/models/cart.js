import { storageDataToLocal, getDataFromLocal } from '../services/index';

export default {
  namespace: 'cart',
  state: {
    goods: JSON.parse(localStorage.getItem('goods'))
      ? JSON.parse(localStorage.getItem('goods'))
      : [],
  },
  reducers: {
    //增加商品
    add(state, { payload: { good } }) {
      let { goods } = state;
      let tempGoods = goods;
      let IsHave = false;
      tempGoods &&
        tempGoods.forEach((tempGood) => {
          if (tempGood.good.id == good.id) {
            tempGood.count++;
            IsHave = true;
          }
        });
      tempGoods = IsHave ? tempGoods : [...tempGoods, { good, count: 1 }];
      // localStorage.setItem('goods', JSON.stringify(tempGoods));
      storageDataToLocal(tempGoods);
      console.log(JSON.parse(localStorage.getItem('goods')));
      return { goods: tempGoods };
    },
    //减少商品
    min(state, { payload: { good } }) {
      let { goods } = state;
      let tempGoods = goods;
      tempGoods.forEach((tempGood) => {
        if (tempGood.good == good) {
          tempGood.count = Math.max(1, --tempGood.count);
        }
      });
      // localStorage.setItem('goods', JSON.stringify(tempGoods));
      storageDataToLocal(tempGoods);
      return { goods: [...tempGoods] };
    },
    //删除商品
    delete(state, { payload: { id } }) {
      let { goods } = state;
      let tempGoods = goods;
      tempGoods = tempGoods.filter((tempGood) => tempGood.good.id !== id);
      // localStorage.setItem('goods', JSON.stringify(tempGoods));
      storageDataToLocal(tempGoods);
      return { goods: tempGoods };
    },
    //清空商品
    deleteAll() {
      localStorage.clear();
      return { goods: [] };
    },
    //测试打印
    log(state) {
      console.log('我是打印函数');
      return { state };
    },
  },
  effects: {},
  subscriptions: {},
};
