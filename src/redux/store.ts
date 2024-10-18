import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import resultReducer from './resultReducer';
import filterReducer from './filterReducer';

export const setupStore: any = (preloadedState: Partial<RootState> = {}) => {
    const rootReducer = combineReducers({
        result: resultReducer,
        filter: filterReducer,
    });
    return configureStore({
        reducer: rootReducer,
        preloadedState,
    });
};

const store = setupStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;

export default store;
