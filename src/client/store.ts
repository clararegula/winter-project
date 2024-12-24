import { configureStore } from '@reduxjs/toolkit';
import calculationReducer from './reducers/calculationReducer'

const store = configureStore({
    reducer: {
        calculation: calculationReducer
    }
});

export default store;