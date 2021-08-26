import { getData } from '../services/index';
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
      let { products } = yield call(getData);
      // console.log(payload,"我是filter 的paylode");
      let { filterdSizes, orderBy } = payload && payload; //选中的品类 和排序的规则
      // console.log(products);
      let filterdProducts =
        products &&
        products.filter((item, index) => {
          let { availableSizes } = item; //每个商品的size
          let shouldReturn = false;
          for (let i = 0; i < filterdSizes.length; i++) {
            if (availableSizes.indexOf(filterdSizes[i]) !== -1) {
              shouldReturn = true;
            }
          }
          if (filterdSizes.length == 0) {
            return true;
          }
          return shouldReturn;
        });
      // console.log(orderBy,"tilterOrderBy");

      //排序逻辑
      switch (orderBy) {
        case 'Select':
          yield put({
            type: 'save',
            payload: {
              products: filterdProducts,
            },
          });
          break;
        case 'Lower':
          yield put({
            type: 'save',
            payload: {
              products: filterdProducts.sort(
                (item1, item2) => item1.price - item2.price,
              ),
            },
          });
          break;
        case 'High':
          yield put({
            type: 'save',
            payload: {
              products: filterdProducts.sort(
                (item1, item2) => item2.price - item1.price,
              ),
            },
          });
          break;
        default:
          return filterdProducts;
      }
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
