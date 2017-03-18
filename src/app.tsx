import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import configureStore from 'redux/store/configureStore';
import { polyfill } from 'es6-promise'
import initReactFastclick from 'react-fastclick'

import 'common/styles/common.scss'

//dev module.hot
declare var module: { hot: any };

polyfill();
initReactFastclick();

const store = configureStore();

const root = document.getElementById('app');

render(
    <AppContainer>
        <Root store={store}/>           
    </AppContainer>, 
    root
);

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        const NextApp = require('./containers/Root').default;

        render(
            <AppContainer>
                <NextApp store={store}/>           
            </AppContainer>,
            root
        )
    })
}