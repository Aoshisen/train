export default {
  namespace: 'cart',
  state: {
      goods:localStorage.getItem('goods')?JSON.parse(localStorage.getItem('goods')):[]
  },
  reducers: {
    'add'(state,{payload:{good}}) {
        let {goods}=state
        let result=goods;
        let IsHave=false;
        result.forEach(_good => {
            if(_good.good.id==good.id){
            _good.count++
            IsHave=true;
            }
        });
        result=IsHave?result:[...result,{good,count:1}]
        localStorage.setItem("goods",JSON.stringify(result))
        return{goods:result}
    },
    'min'(state,{payload:{good}}){
        let {goods}=state;
        let result=goods;
        result.forEach(_good => {
            if(_good.good==good){
                _good.count=Math.max(1,--_good.count)
            }
        });
        localStorage.setItem("goods",JSON.stringify(result))
        return {goods:[...result]}
    },
    'delete'(state,{payload:{id}}){
        let {goods}=state;
        let result=goods;
        result=result.filter(_good=>_good.good.id!==id)
        localStorage.setItem("goods",JSON.stringify(result))
        return {goods:result}
    },
    'deleteAll'(){
        localStorage.clear()
        return {goods:[]}
    },
    "log"(state){
        console.log("我是打印函数");
        return {state}
    }
  },
  effects: {
  },
  subscriptions: {
  }
};