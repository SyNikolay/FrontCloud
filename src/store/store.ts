import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { reducer as authReducer } from 'components/Auth/slice/auth.slice';
import { reducer as authFormReducer } from 'components/AuthForm/slice';

export type AppState = ReturnType<typeof redusers>;

const redusers = combineReducers({
  auth: authReducer,
  authForm: authFormReducer,
});

export const store = configureStore({
  reducer: redusers,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
