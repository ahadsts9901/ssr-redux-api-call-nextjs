import { configureStore } from '@reduxjs/toolkit';
import stateReducer from './state';

export const store = configureStore({
    reducer: stateReducer
})