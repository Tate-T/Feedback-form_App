import { createSlice } from '@reduxjs/toolkit';
import { sendFeedback } from './feedbackOperations';

const initialState = {
    feedbacks: {
        name: '',
        email: '',
        message: ''
    },
    isLoading: false,
    error: null,
};

const feedbackSlice = createSlice({
    name: 'feedback',
    initialState,

    extraReducers: builder => {
        builder
            .addCase(sendFeedback.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(sendFeedback.fulfilled, (state, { payload }) => {
                state.feedbacks.feedback = [...state.feedbacks.feedback, payload];
            })
            .addCase(sendFeedback.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
    },
});

export default feedbackSlice.reducer;