import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './routes/home';

// browserHistory.listen(() => {
//   window.NProgress.start();
//   window.NProgress.done();
// });

export default (
  <Switch>
    <Route exact path="/home" component={Home} />
  </Switch>
);
