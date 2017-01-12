import * as React from "react"
import { render } from 'react-dom'
// import { Router, useRouterHistory } from 'react-router'
// import { createHistory } from 'history'
// import { Provider } from 'react-redux'
// import { syncHistoryWithStore } from 'react-router-redux'
import { Button, Accordion, List, TextareaItem } from 'antd-mobile';

// import configureStore from 'redux/store/configureStore'

// import Home from "./Home"

// declare var module: { hot: any };
// declare var require: any;

// const routes = {
//   childRoutes: [ {
//     path: '/',
//     childRoutes: [
//             {
//             path: 'Home',
//             component: require('./Home').default
//         }
//     ]
//   } ]
// }

// const store = configureStore();

// const history = useRouterHistory(createHistory)({
//     basename: '/'
// })
// const _history = syncHistoryWithStore(history, store)

// export default class App extends React.Component<any, any> {

//     constructor() {
//         super()
//     }

//     render() {
//         return (
//             <Provider store={store}>
//                 { 
//                     process.env.NODE_ENV == "development" ?
//                         <div>
//                             <Router history={_history} routes={routes}/>
//                             {React.createElement(require("containers/DevTools").default)}
//                         </div>
//                     : (
//                         <Router history={history} routes={routes}/>
//                     )
//                 }
//             </Provider>
//         )
//     }
// }

export default class App extends React.Component<any, any> {

    constructor() {
        super()
    }

    render() {
    return (<div>
      <h1>This is antd-mobile demo!</h1>
      <Button loading disabled size="small">Start</Button>
      <TextareaItem maxLength={2} count={3} />
      <Accordion>
          <Accordion.Panel header="标题一">
            <List>
              <List.Item>子内容一</List.Item>
              <List.Item>子内容二</List.Item>
              <List.Item>子内容三</List.Item>
            </List>
          </Accordion.Panel>
          <Accordion.Panel header="标题二" className="pad">this is panel content2 or other</Accordion.Panel>
          <Accordion.Panel header="标题三" className="pad">
            文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本
          </Accordion.Panel>
        </Accordion>
    </div>);
  }
}