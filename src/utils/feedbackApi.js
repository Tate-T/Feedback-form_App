import axios from 'axios';
import { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://';

export const addNewFeedbackApi = feedback => {
    return axios.post('/feedback', feedback).then(({ data }) => {
        console.log(data.newFeedback);
        return (
            Notify.success("Ваш відгук відправлено"))
        // {
        // title: data.newFeedback.title,
        // author: data.newFeedback.author,
        // publishYear: data.newFeedback.publishYear,
        // pagesTotal: data.newFeedback.pagesTotal,
        // pagesFinished: data.newFeedback.pagesFinished, // or 0 as initial value for a new book in the library
        // _id: data.newFeedback._id,
        // };
    });
};