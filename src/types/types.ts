import { AnySchema } from 'yup';

export type Shape<Fields extends Record<string, any>> = {
  [Key in keyof Fields]: AnySchema;
};

export type AuthFormType = {
  nickname: string;
  name: string;
  sername: string;
  phone: string;
  email: string;
  sex: 'man' | 'woman' | '';
  advantages: string[];
  radio: number | null;
  checkbox: number[];
  about: string;
};
