import { ADD_PAGE } from '../actionTypes'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

export const addPage = item => ({
    type: ADD_PAGE,
    item
})

export const addPageAsync = item => (
    (dispatch, getState) => (
        delay(2000).then(() => {dispatch(addPage(item))})
    )
)