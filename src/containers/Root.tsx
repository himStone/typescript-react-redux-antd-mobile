import * as React from "react"
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './Home/'
import MyInfo from './MyInfo/'

import 'common/styles/common.scss'

export default ({ store }) => (
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/myInfo" component={MyInfo}/>
      </Switch>
    </Provider>
  </BrowserRouter>
);