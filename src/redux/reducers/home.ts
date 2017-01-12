import { handleActions, Action } from 'redux-actions'

import { Item, IState } from 'redux/modals/home'
import * as ActionType from 'redux/actions/home'

const initialState: IState = [<Item>{
  text: 'default text'
}]

export default handleActions<any, IState>({
    [ActionType.HOME_ADDLIST]: (state: IState, action: Action<any>): IState => {
        return [{ text: action.payload }, ...state];
    },
}, initialState)

export const getHomeState = (state = initialState, action: Action<any>) => {
	return state 
}