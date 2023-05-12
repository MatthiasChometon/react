import { ADD_MENU_ITEM } from '../actionTypes'

const menuItems = (state = [], action) => {
    switch (action.type) {
        case ADD_MENU_ITEM: 
            return [
                ...state,
                Object.assign(
                    action.item,
                    { 
                        id: state.slice(-1)[0] ? state.slice(-1)[0].id + 1 : 0
                    }
                )
            ]
        default:
            return state
    }
}

export default menuItems