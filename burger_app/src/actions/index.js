
import {SET_BURGER, SET_FILLING, SET_SEASONING, CALCULATE, RESET} from './action'

export const initialState = {
    burger: null,
    filling: null,
    seasoning: null,
    totalPrice: 0,
    totalCalories: 0,
  };

export function reducer(state = initialState, { type, payload }){
    switch (type) {
        case SET_BURGER:
            return {...state, burger: payload};
        case SET_FILLING:
            return {...state, filling:payload};
        case SET_SEASONING:
            return {...state, seasoning:payload};
        case CALCULATE:
            const {burger, filling, seasoning} = state;
            if (!burger) return state;
            const price = burger.price + (filling ? filling.price : 0) + (seasoning ? seasoning.price : 0);
            const calories = burger.calories + (filling ? filling.calories : 0) + (seasoning ? seasoning.calories : 0);
            return {...state, totalPrice: price, totalCalories: calories};
        case RESET:
            return initialState;
        default:
            return state;
    }
}





