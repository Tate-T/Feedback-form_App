import { createReducer } from "@reduxjs/toolkit";
import shortid from 'shortid';
import { addFeedbackRequest, addFeedbackSuccess, addFeedbackError } from "./feedback-actions";

const initialState = [
    {
        id: shortid.generate(),
        name: '',
        email: '',
        message: ''
    }
];

export const feedbacksReducer = createReducer(initialState, {
    [addFeedbackSuccess]: (state, { payload }) => [...state, payload]
});

export const isLoadingReducer = createReducer(false, {
    [addFeedbackRequest]: () => true,
    [addFeedbackSuccess]: () => false,
    [addFeedbackError]: () => false,
})

const setError = (_, { payload }) => payload;
const resetError = () => null;

export const errorReducer = createReducer(null, {
    [addFeedbackError]: setError,
    [addFeedbackRequest]: resetError,
});