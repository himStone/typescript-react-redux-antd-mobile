import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';
import customList from './customList';

const rootReducer = combineReducers({
  customList,
  routing: routerReducer,
});

export default rootReducer;
