import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const initialState = {
    menuItems: [],
    pages: []
}

const customMiddleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, initialState, customMiddleware(applyMiddleware(thunk)))

export default store