import { AppState } from 'store/store';
import { AuthSlice } from './auth.slice';

export const getAuthState = (state: AppState) => state[AuthSlice.name];

export const getUser = (state: AppState) => state[AuthSlice.name].user;

export const getEmail = (state: AppState) => state[AuthSlice.name].email;

export const getPhone = (state: AppState) => state[AuthSlice.name].phone;

export const getIsAuth = (state: AppState) => state[AuthSlice.name].isAuth;

export const getLinks = (state: AppState) => state[AuthSlice.name].user.links;
