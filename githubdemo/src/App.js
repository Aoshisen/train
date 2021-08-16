import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

// 自己定义的组件
import Header from './components/header.js';

// 自己定义的页面
import IndexPage from './pages/indexPage/index.js';
import BattlePage from './pages/BattlePage/index.js';
import Page404 from './pages/page404/index.js';
import ResultPage from './pages/resultPage/index.js';

import './App.css';

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
