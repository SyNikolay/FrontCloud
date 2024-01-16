import { AuthFormType } from 'types';

export enum Routes {
  BASE = '/',
  AUTH = '/auth',
  AUTH_FORM = '/auth-form',
}

export const defaultValues: AuthFormType = {
  nickname: '',
  name: '',
  sername: '',
  phone: '',
  email: '',
  sex: '',
  advantages: [],
  radio: '',
  checkbox: [],
  about: '',
};
