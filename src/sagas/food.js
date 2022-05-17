import {take, put, delay } from 'redux-saga/effects'
import { foodMinus } from '../reducers/userInfo'

export function* foodSaga(){
    delay(3000);
    const action = yield take(foodMinus.type)
    console.log(action);

}