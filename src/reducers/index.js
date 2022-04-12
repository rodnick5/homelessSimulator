import { combineReducers } from 'redux'
import userInfo from './userInfo'
import course from './course'

export default combineReducers({
    userInfo,
    course,
})