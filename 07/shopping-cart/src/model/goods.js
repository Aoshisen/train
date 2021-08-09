export default {
    namespace: 'goods',
    state: ['yyds'],
    reducers: {
      'delete'(state, { payload: id }) {
        return state.filter(item => item.id !== id);
      },
    },
  };