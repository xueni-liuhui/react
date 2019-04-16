import { HashRouter, Switch, Route} from 'react-router-dom';
import React from 'react';
import BasicLayout from './layouts/BasicLayout';
import UserLayout from './layouts/UserLayout';
// 按照 Layout 分组路由
const router = () => {
    return (
      <HashRouter>
        <Switch>
              <Route path="/"         component={BasicLayout} />
              <Route path="/user"     component={UserLayout} />
        </Switch>
      </HashRouter>
    );
  };
  
  export default router();