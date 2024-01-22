import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthFormState } from '../types';

const initialState: AuthFormState = {
  stepIdx: 0,
  formValues: {
    nickname: '',
    name: '',
    sername: '',
    sex: '',
    advantages: [],
    radio: null,
    checkbox: [],
    about: '',
    email: '',
    phone: '',
  },
};

export const AuthFormSlice = createSlice({
  name: 'authForm',
  initialState,
  reducers: {
    setFormValues: (state, actions: PayloadAction<AuthFormState['formValues']>) => {
      state.formValues = { ...state.formValues, ...actions.payload };
    },
    setNextStepIdx: (state) => {
      state.stepIdx = state.stepIdx + 1;
    },
    setPrevStepIdx: (state) => {
      state.stepIdx = state.stepIdx - 1;
    },
  },
});

export const { setFormValues, setNextStepIdx, setPrevStepIdx } = AuthFormSlice.actions;
export const { reducer } = AuthFormSlice;
