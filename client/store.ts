import { configureStore } from '@reduxjs/toolkit';
import testReducer from './reducers/testReducer'

const store = configureStore({
    reducer: {
        test: testReducer
    }
});

export default store;