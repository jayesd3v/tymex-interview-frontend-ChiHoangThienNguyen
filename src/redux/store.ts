import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import resultReducer from './resultReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
    result: resultReducer,
    filter: filterReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
