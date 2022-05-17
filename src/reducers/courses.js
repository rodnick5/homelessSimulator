import { createSlice} from '@reduxjs/toolkit'

const initialState = {
    moneyCourse: 0,
    bottleCourse: 0,
}

const coursesSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        setCourses(state, action){
            state.moneyCourse = action.payload.moneyCourse
            state.bottleCourse = action.payload.bottleCourse
        }
    }
})
const { reducer, actions } = coursesSlice
export default reducer
export const {
    setCourses,
} = actions