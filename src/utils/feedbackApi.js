import axios from 'axios';
import { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://6216b55b71e7672e53694d33.mockapi.io/';

export const addNewFeedbackApi = newFeedback => {
    return axios.post('/feedback', newFeedback).then(({ data }) => {

        return (
            Notify.success("Ваш відгук відправлено")) &
        {
            name: data.newFeedback.name,
            email: data.newFeedback.email,
            message: data.newFeedback.message,
            id: data.newFeedback.id,
        };
    });
};