import * as React from 'react';
import { render } from 'react-dom';
import AppContainer from 'react-hot-loader';
import Root from './containers/Root';

//dev module.hot
declare var module: { hot: any };

const root = document.getElementById('app');

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