import { configureStore } from '@reduxjs/toolkit';
import feedbackReduser from './feedbackSlice';

export const store = configureStore({
    reducer: feedbackReduser,
})