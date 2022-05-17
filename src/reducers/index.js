import { combineReducers } from 'redux'
import userInfo from './userInfo'
import courses from './courses'

export default combineReducers({
    userInfo,
    courses,
})