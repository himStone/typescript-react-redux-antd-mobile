import { Store, createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Iterable } from 'immutable';
// import api from '../middleware/api'
import rootReducer from '../reducers';
import DevTools from 'containers/DevTools';

declare var module: { hot: any };
declare var require: any;

const stateTransformer = (state) => {
    return Iterable.isIterable(state) ? state.toJS() : state;
};

export default function configureStore() {
    const store: Store<any> = createStore(
        rootReducer,
        compose(
            applyMiddleware(thunkMiddleware, createLogger({stateTransformer})),
            DevTools.instrument(),
        ),
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
