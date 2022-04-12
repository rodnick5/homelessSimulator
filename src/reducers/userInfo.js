import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  health: 50,
  food: 50,
  happiness: 50,
  drunk: 50,
  hrivna: 50000000,
  dollar: 0,
  bottles: 0,
  age: 18,
  days: 363,
  transport: 'Босиком',
  estate: 'Коробка',
  rating: 5,
  status: 'Бомж',
};

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setStatus(state, action) {
      state.status = action.payload.status;
    },
    setCurrencyExchange(state, action){
      state.hrivna -= action.payload.hrivna
      state.dollar += action.payload.dollar
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
    collectBottles(state, action) {
      state.bottles += 1;
    },
    hungryPlus(state, action) {
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
    hungryMinus(state, action) {
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
    drunkMinus(state, action) {
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
    healthMinus(state, action) {
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
    happinessMinus(state, action) {
      state.happiness -= 1;
    },
    hrivnaPlus(state, action) {
      if (state.rating >= action.payload.rating) {
        state.hrivna += action.payload.hrivna;
      } else return;
    },
    daysPlus(state, action) {
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
  setStatus,
  setEstate,
  setTransport,
  setCurrencyExchange,
  collectBottles,
  hungryPlus,
  drunkPlus,
  drunkMinus,
  hungryMinus,
  healthMinus,
  healthPlus,
  happinessMinus,
  happinessPlus,
  hrivnaPlus,
  daysPlus,
} = actions;
