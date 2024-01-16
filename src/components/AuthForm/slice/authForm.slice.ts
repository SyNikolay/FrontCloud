import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthFormState } from '../types';

const initialState: AuthFormState = {
  stepIdx: 0,
  nickName: null,
  name: null,
  sername: null,
  sex: null,
  advantages: null,
  radio: null,
  checkbox: null,
  about: null,
};

export const AuthFormSlice = createSlice({
  name: 'authForm',
  initialState,
  reducers: {
    setNextStepIdx: (state) => {
      state.stepIdx = state.stepIdx + 1;
    },
    setPrevStepIdx: (state) => {
      state.stepIdx = state.stepIdx - 1;
    },
  },
});

export const { setNextStepIdx, setPrevStepIdx } = AuthFormSlice.actions;
export const { reducer } = AuthFormSlice;
