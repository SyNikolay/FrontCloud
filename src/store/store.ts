import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { reducer as authReducer } from 'components/Auth/slice/auth.slice';
import { reducer as authFormReducer } from 'components/AuthForm/slice';
import { formApi } from './api/sendForm';

export type AppState = ReturnType<typeof redusers>;

const redusers = combineReducers({
  auth: authReducer,
  authForm: authFormReducer,
  [formApi.reducerPath]: formApi.reducer,
});

export const store = configureStore({
  reducer: redusers,
  devTools: true,
  middleware: (getdefaultMiddleware) => getdefaultMiddleware().concat([formApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
