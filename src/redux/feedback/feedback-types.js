import { addNewFeedbackApi } from "../../utils/feedbackApi";
import { addFeedbackRequest, addFeedbackSuccess, addFeedbackError } from './transactions-actions';

import toast from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const addFeedback = (feedback) => {
    toast.success("Your feedback was sent", {
        theme: 'colored',
        closeOnClick: true,
        pauseOnHover: true,
        autoClose: 2000,
    });

    return (dispatch) => {
        dispatch(addFeedbackRequest());

        addNewFeedbackApi(feedback)
            .then((data) => dispatch(addFeedbackSuccess(data)))
            .catch((err) => dispatch(addFeedbackError(err.message)));
    }
}