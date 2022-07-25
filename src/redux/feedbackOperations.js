import { createAsyncThunk } from '@reduxjs/toolkit';
// import { Notify } from 'notiflix';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { addNewFeedbackApi } from '../utils/feedbackApi';

export const sendFeedback = createAsyncThunk('feedback/add', async (feedback, thunkApi) => {
    try {
        const addedFeedback = await addNewFeedbackApi(feedback);
        toast.success("Ваш відгук відправлено", {
            theme: 'colored',
            closeOnClick: true,
            pauseOnHover: true,
            autoClose: 2000,
        });
        return addedFeedback;
    } catch (error) {
        return thunkApi.rejectWithValue(toast.error("Ваш відгук НЕ відправлено"));
    }
});