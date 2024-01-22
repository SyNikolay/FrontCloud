import { AuthFormType } from 'types';

export interface AuthFormState {
  stepIdx: number;
  formValues: AuthFormType;
}
