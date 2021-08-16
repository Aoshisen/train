import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

// 自己定义的组件
import Header from './components/header';

// 自己定义的页面
import IndexPage from './pages/indexPage/index';
import BattlePage from './pages/battlePage/index';
import Page404 from './pages/page404/index';
import ResultPage from './pages/resultPage/index';

// import '@/App.less';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path="/" component={IndexPage} exact />
          <Route path="/battle" component={BattlePage} exact />
          <Route path="/result" component={ResultPage} exact />
          <Route path="" component={Page404} />
        </Switch>
      </>
    );
  }
}
export default App;
