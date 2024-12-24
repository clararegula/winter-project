import store from './client/store';

export interface CounterState {
    counter: number
}

export interface Action {
    type: string,
    payload?: any;
}

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;