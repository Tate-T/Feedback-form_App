import { configureStore } from '@reduxjs/toolkit';
// import { feedbacksReduser, isLoadingReducer, errorReducer } from './feedbackSlice';import {transactionsReducer, filterReducer, isLoadingReducer, errorReducer } from './transactions/transactions-reducer';
import { feedbacksReducer, isLoadingReducer, errorReducer } from './feedback/feedback-reduser';


export const store = configureStore({
    reducer: {
        feedbacks: feedbacksReducer,
        isLoading: isLoadingReducer,
        error: errorReducer
    },
    devTools: process.env.NODE_ENV !== 'production', // true
})