import * as React from "react"
import { render } from 'react-dom'

const { AppContainer } = require('react-hot-loader') 

import App from "./containers/App"

declare var module: { hot: any };
declare var require: any;

const root = document.getElementById('app') 

render(
    <AppContainer>
        <App/>           
    </AppContainer>, 
    root
);

if (module.hot) {
    module.hot.accept('./containers/App', () => {
        const NextApp = require('./containers/App').default;

        render(
            <AppContainer>
                <NextApp/>           
            </AppContainer>,
            root
        )
    })
}