import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, User } from '../types';

const initialState: AuthState = {
  user: {
    userName: '',
    links: {
      Telegram: '',
      GitHub: '',
      Resume: '',
    },
  },
  email: '',
  phone: '',
  isAuth: false,
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
});

export const { setEmail, setPhone, setUser, setIsAuth } = AuthSlice.actions;
export const { reducer } = AuthSlice;
