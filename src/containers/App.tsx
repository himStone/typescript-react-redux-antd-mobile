import * as React from "react"
import { render } from 'react-dom'
import { Router, useRouterHistory } from 'react-router'
import { createHistory } from 'history'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from 'redux/store/configureStore'

import Home from "./Home"

declare var module: { hot: any };
declare var require: any;

const routes = {
  childRoutes: [ {
    path: '/',
    childRoutes: [
            {
            path: 'Home',
            component: require('./Home')
        }
    ]
  } ]
}

const store = configureStore();

const history = useRouterHistory(createHistory)({
    basename: '/'
})
const _history = syncHistoryWithStore(history, store)

export default class App extends React.Component<any, any> {

    constructor() {
        super()
    }

    render() {
        return (
            <Provider store={store}>
                { 
                    false && process.env.NODE_ENV == "development" ?
                        <div>
                            <Router history={_history} routes={routes}/>
                            {React.createElement(require("containers/DevTools"))}
                        </div>
                    : (
                        <Router history={history} routes={routes}/>
                    )
                }
            </Provider>
        )
    }
}