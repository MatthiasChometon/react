import { ADD_PAGE } from '../actionTypes'

const pages = (state = [], action) => {
    switch (action.type) {
        case ADD_PAGE:
            action.item.id = state.slice(-1)[0]? state.slice(-1)[0].id + 1 : 1
            return [
                ...state,
                action.item
            ]
        default:
            return state
    }
}

export default pages