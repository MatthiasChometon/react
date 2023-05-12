import { ADD_MENU_ITEM } from '../actionTypes'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

export const addMenuItem = item => ({
    type: ADD_MENU_ITEM,
    item
})

export const addMenuItemAsync = item =>
    (dispatch, getState) => (
        delay(2000).then(() => { dispatch(addMenuItem(item)) })
    )