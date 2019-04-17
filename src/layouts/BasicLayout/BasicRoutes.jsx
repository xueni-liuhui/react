import React, {Component} from 'react';
import { Switch, Route} from 'react-router-dom';
import {basicRoutes} from "../../routerConfig";
export default class BasicRoutes extends Component {
  renderRoute = (item, index) => {
    return item.component ? (
      <Route
        key={index}
        path={item.path}
        component={item.component}
        exact={item.exact}
      />
    ) : null;
  };
  render() {
    return (
      <Switch>
        {/* 渲染路由表 */}
           {basicRoutes.map(this.renderRoute)}
      </Switch>
    );
  }
}

