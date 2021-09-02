import { getData, filterProducts, orderProducts } from '../services/index';
export default {
  namespace: 'products',
  state: [],
  reducers: {
    save(state, { payload: { products } }) {
      // console.log(products,'将数据存储下来');
      return { products };
    },
  },
  effects: {
    *query({ payload }, { call, put }) {
      let { products } = yield call(getData);
      // console.log(products,'请求到了数据');
      yield put({
        type: 'save',
        payload: {
          products,
        },
      });
    },
    *filter({ payload }, { call, put }) {
      //选中的品类 和排序的规则
      let { filterdSizes, orderBy } = payload && payload;
      //先筛选
      let filterdProducts = yield call(() => filterProducts(filterdSizes));
      //再排序
      let orderedProducts = yield call(() =>
        orderProducts(filterdProducts, orderBy),
      );
      yield put({
        type: 'save',
        payload: {
          products: orderedProducts,
        },
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({
            type: 'query',
          });
        }
      });
    },
  },
};
