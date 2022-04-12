import { createSlice} from '@reduxjs/toolkit'

const initialState = {
    course: 0,
}

const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        setCourse(state, action){
            state.course = action.payload
        }
    }
})
const { reducer, actions } = courseSlice
export default reducer
export const {
    setCourse,
} = actions