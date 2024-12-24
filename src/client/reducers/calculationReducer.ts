import * as types from '../constants/actionTypes';
import { CounterState, Action } from '../../types';


const initalState: CounterState = {
    counter: 0
}

const calculationReducer = (state = initalState, action: Action) => {
    switch (action.type) {
       case types.ADD_COUNTER:
 
       return {
        ...state,
        counter: state.counter + 1
       };

       case types.SUBTRACT_COUNTER:

       return {
        ...state,
        counter: state.counter - 1
       };

    default: {
        return state;
      }
    }
}


export default calculationReducer;