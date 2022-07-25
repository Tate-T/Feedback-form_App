import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

import { addNewFeedbackApi } from './utils/feedbackApi.js';

export const addFeedback = createAsyncThunk('feedback/add', async (feedback, thunkApi) => {
    try {
        const addedFeedback = await addNewFeedbackApi(feedback);
        Notify.success(
            `Ваш відгук "${feedback.title}" відправлено`
        );
        return addedFeedback;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});