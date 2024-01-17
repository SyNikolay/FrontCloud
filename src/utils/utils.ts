import * as Yup from 'yup';
import { AuthFormType, Shape } from '../types';

export const authPageValidationSchema = Yup.object<Shape<AuthFormType>>({
  nickname: Yup.string().required('Обязательное поле').max(30, 'Максимальная длинна 30 символов'),
  // .matches(/([a-zA-Z0-9])/, 'Допустимы буквы и цифры'),
  // password: Yup.string().required(),
  name: Yup.string().required(),
  // sername: Yup.string().required(),
  // phone: Yup.string().required(),
  // email: Yup.string()
  //   .required()
  // .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Введен некорректный e-mail'),
  // sex: Yup.string().required(),
  // advantages: Yup.string().required(),
  // radio: Yup.string().required(),
  // checkbox: Yup.string().required(),
  // about: Yup.string().required(),
});
