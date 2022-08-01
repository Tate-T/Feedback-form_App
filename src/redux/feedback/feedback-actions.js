import { createAction } from "@reduxjs/toolkit";

export const addFeedbackRequest = createAction('addFeedbackRequest');

export const addFeedbackSuccess = createAction('addFeedbackSuccess');

export const addFeedbackError = createAction('addFeedbackError');