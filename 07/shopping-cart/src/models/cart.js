export default {
  namespace: 'cart',
  state: {
    goods: JSON.parse(localStorage.getItem('goods')),
  },
  reducers: {
    add(state, { payload: { good } }) {
      let { goods } = state;
      let _goods = goods;
      let IsHave = false;
      _goods &&
        _goods.forEach((_good) => {
          if (_good.good.id == good.id) {
            _good.count++;
            IsHave = true;
          }
        });
      _goods = IsHave ? _goods : [..._goods, { good, count: 1 }];
      localStorage.setItem('goods', JSON.stringify(_goods));
      console.log(JSON.parse(localStorage.getItem('goods')));
      return { goods: _goods };
    },
    min(state, { payload: { good } }) {
      let { goods } = state;
      let _goods = goods;
      _goods.forEach((_good) => {
        if (_good.good == good) {
          _good.count = Math.max(1, --_good.count);
        }
      });
      localStorage.setItem('goods', JSON.stringify(_goods));
      return { goods: [..._goods] };
    },
    delete(state, { payload: { id } }) {
      let { goods } = state;
      let _goods = goods;
      _goods = _goods.filter((_good) => _good.good.id !== id);
      localStorage.setItem('goods', JSON.stringify(_goods));
      return { goods: _goods };
    },
    deleteAll() {
      localStorage.clear();
      return { goods: [] };
    },
    log(state) {
      console.log('我是打印函数');
      return { state };
    },
  },
  effects: {},
  subscriptions: {},
};
