import { createAction } from 'redux-actions'

import { Item } from 'redux/modals/home'

export const HOME_ADDLIST= 'HOME_ADDLIST'

export const addToList = createAction<Item>(
    HOME_ADDLIST,
    (item: Item) => item
);