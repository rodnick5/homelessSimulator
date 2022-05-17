import { useSelector } from "react-redux";

export const healthSelector = (state) => state.userInfo.health
export const foodSelector =  (state) => state.userInfo.food
export const happinessSelector = (state) => state.userInfo.happiness
export const drunkSelector =  (state) => state.userInfo.drunk
export const hrivnaSelector =  (state) => state.userInfo.hrivna
export const dollarSelector =  (state) => state.userInfo.dollar