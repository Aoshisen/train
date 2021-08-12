import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';

export interface IndexModelState {
  name: string;
}



const IndexModel = {
  namespace: 'index',
  state: {
    name: 'Ass',
  },

  // effects: {
  //   *query({ payload }, { call, put }) {},
  // },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
  // subscriptions: {
  //   setup({ dispatch, history }) {
  //     return history.listen(({ pathname }) => {
  //       if (pathname === '/') {
  //         dispatch({
  //           type: 'query',
  //         });
  //       }
  //     });
  //   },
  // },
};

export default IndexModel;