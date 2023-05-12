import { combineReducers } from 'redux';
import menuItems from './menu'
import pages from './page'

export default combineReducers({ menuItems, pages });