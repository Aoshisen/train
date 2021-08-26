import React, { Component, Suspense, lazy } from "react";
import { Route, Switch } from "react-router";

// 自己定义的组件
import Header from "@/components/header";

// 自己定义的页面
import IndexPage from "@/pages/indexPage/index";
// import BattlePage from './pages/battlePage/index';
import Page404 from "@/pages/page404/index";
import ResultPage from "@/pages/resultPage/index";
import "./App.less";

const BattlePage = lazy(() => import("./pages/battlePage"));

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Suspense
          fallback={
            <div className="wrapper" key={1}>
              <div className="rubik-loader" />
            </div>
          }
        >
          <Switch>
            <Route path="/" component={IndexPage} exact />
            <Route path="/battle" component={BattlePage} exact />
            <Route path="/result" component={ResultPage} exact />
            <Route path="" component={Page404} />
          </Switch>
        </Suspense>
      </>
    );
  }
}
export default App;
