import { all } from 'redux-saga/effects'
import { foodSaga } from './food'

export default function* rootSaga(){
    yield all([
        foodSaga()
    ])

}