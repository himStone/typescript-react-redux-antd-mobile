import { List } from 'immutable';
import { handleActions, Action } from 'redux-actions';

const initialState = List();

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
