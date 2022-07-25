import { configureStore } from '@reduxjs/toolkit';
import feedbackReduser from './feedback/feedback-reduser';

export const store = configureStore({
    reducer: feedbackReduser,
})