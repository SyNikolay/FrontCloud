import { AnySchema } from 'yup';

export type Shape<Fields extends Record<string, any>> = {
  [Key in keyof Fields]: AnySchema;
};

export type AuthFormType = {
  nickname: string | null;
  name: string | null;
  sername: string | null;
  phone: string | null;
  email: string | null;
  sex: string | null;
  advantages: string[];
  radio: string | null;
  checkbox: number[];
  about: string | null;
};
