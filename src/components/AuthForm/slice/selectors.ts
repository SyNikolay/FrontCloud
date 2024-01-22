import { AppState } from 'store/store';
import { AuthFormSlice } from './authForm.slice';

export const getAuthFormState = (state: AppState) => state[AuthFormSlice.name];

export const getAuthFormValues = (state: AppState) => state[AuthFormSlice.name].formValues;

export const getAuthFormStep = (state: AppState) => state[AuthFormSlice.name].stepIdx;
