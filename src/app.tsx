import * as React from "react"
import { render } from 'react-dom'

const { AppContainer } = require('react-hot-loader') 

import Root from "./containers/Root"

declare var module: { hot: any };
declare var require: any;

const root = document.getElementById('app') 

render(
    <AppContainer>
        <Root/>           
    </AppContainer>, 
    root
);

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        const NextApp = require('./containers/Root').default;

        render(
            <AppContainer>
                <NextApp/>           
            </AppContainer>,
            root
        )
    })
}