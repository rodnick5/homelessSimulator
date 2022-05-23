import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  health: 50,
  food: 50,
  happiness: 50,
  drunk: 50,
  hrivna: 500,
  dollar: 444,
  bottles: 10,
  age: 18,
  days: 363,
  transport: 'Босиком',
  estate: 'Коробка',
  rating: 5,
  status: 'Бомж',
  died: false
};

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setDied(state, action){
      state.died = action.payload
    },
    setStatus(state, action) {
      state.status = action.payload.status;
    },
    setDollarBuying(state, action){
      state.hrivna -= action.payload.hrivna
      state.dollar += action.payload.dollar
    },
    setHrivnaBuying(state, action){
      state.hrivna += action.payload.hrivna
      state.dollar -= action.payload.dollar
    },
    setBottleExchange(state, action){
      state.bottles -= action.payload.bottles
      state.hrivna += action.payload.hrivna
    },
    setEstate(state, action) {
      if (
        state.hrivna < action.payload.hrivna ||
        state.estate == action.payload.estate
      ) {
        return;
      }
      state.estate = action.payload.estate;
      state.hrivna -= action.payload.hrivna;
      state.rating += action.payload.rating;
    },
    setTransport(state, action) {
      if (state.transport == action.payload.transport) {
        return;
      }
      if (action.payload.hrivna ) {
        state.hrivna -= action.payload.hrivna;
        state.transport = action.payload.transport;
        state.rating += action.payload.rating;
      } else  {
        state.dollar -= action.payload.dollar;
        state.transport = action.payload.transport;
        state.rating += action.payload.rating;
      }
    },
    collectBottles(state) {
      state.bottles += 1;
    },
    foodPlus(state, action) {
      if (state.food == 100 || state.hrivna < action.payload.hrivna) {
        return;
      }
      if (state.food + action.payload.food > 100) {
        state.food = 100;
        state.hrivna -= action.payload.hrivna;
      } else {
        state.food += action.payload.food;
        state.hrivna -= action.payload.hrivna;
      }
    },
    foodMinus(state) {
      state.food -= 1;
    },
    drunkPlus(state, action) {
      if (state.drunk == 100 || state.hrivna < action.payload.hrivna) {
        return;
      }
      if (state.drunk + action.payload.drunk > 100) {
        state.drunk = 100;
        state.hrivna -= action.payload.hrivna;
      } else {
        state.drunk += action.payload.drunk;
        state.hrivna -= action.payload.hrivna;
      }
    },
    drunkMinus(state) {
      state.drunk -= 1;
    },
    healthPlus(state, action) {
      if (state.health == 100 || state.hrivna < action.payload.hrivna) {
        return;
      }
      if (state.health + action.payload.health > 100) {
        state.health = 100;
        state.hrivna -= action.payload.hrivna;
      } else {
        state.health += action.payload.health;
        state.hrivna -= action.payload.hrivna;
      }
    },
    healthMinus(state) {
      state.health -= 1;
    },
    happinessPlus(state, action) {
      if (state.happiness == 100 || state.hrivna < action.payload.hrivna) {
        return;
      }
      if (state.happiness + action.payload.happiness > 100) {
        state.happiness = 100;
        state.hrivna -= action.payload.hrivna;
      } else {
        state.happiness += action.payload.happiness;
        state.hrivna -= action.payload.hrivna;
      }
    },
    happinessMinus(state) {
      state.happiness -= 1;
    },
    hrivnaPlus(state, action) {
      if (state.rating >= action.payload.rating) {
        state.hrivna += action.payload.hrivna;
      } else return;
    },
    daysPlus(state) {
      if (state.days == 364) {
        state.age += 1;
        state.days = 0;
      } else state.days += 1;
    },
  },
});

const {reducer, actions} = userInfoSlice;
export default reducer;
export const {
  setDied,
  setStatus,
  setEstate,
  setTransport,
  setDollarBuying,
  setHrivnaBuying,
  setBottleExchange,
  collectBottles,
  drunkPlus,
  drunkMinus,
  foodPlus,
  foodMinus,
  healthMinus,
  healthPlus,
  happinessMinus,
  happinessPlus,
  hrivnaPlus,
  daysPlus,
} = actions;
