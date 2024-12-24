import * as types from '../constants/actionTypes';


const initalState = {
    counter: 0
}

const testReducer = (state = initalState, action) => {
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


export default testReducer;