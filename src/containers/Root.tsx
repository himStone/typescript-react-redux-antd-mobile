import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './Home/';
import CustomTheme from './CustomTheme/';

export default ({ store }) => (
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/customTheme" component={CustomTheme}/>
      </Switch>
    </Provider>
  </BrowserRouter>
);
