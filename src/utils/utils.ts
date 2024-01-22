import * as Yup from 'yup';
import { AuthFormType, Shape } from '../types';

export const authPageValidationSchema = Yup.object<Shape<AuthFormType>>({
  nickname: Yup.string()
    .matches(/^[a-zA-Z0-9]+$/, 'Можно использовать только буквы и цифры')
    .required('Обязательное поле')
    .max(30, 'Максимальная длинна 30 символов'),
  name: Yup.string()
    .matches(/^[a-zA-Z]+$/, 'Можно использовать только буквы')
    .required('Обязательное поле')
    .max(50, 'Максимальная длинна 50 символов'),
  sername: Yup.string()
    .matches(/^[a-zA-Z]+$/, 'Можно использовать только буквы')
    .required('Обязательное поле')
    .max(50, 'Максимальная длинна 50 символов'),
  phone: Yup.string()
    .matches(/^[0-9]+$/, 'Можно использовать только цифры')
    .required('Обязательное поле'),
  email: Yup.string()
    .required()
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Введен некорректный e-mail'),
  sex: Yup.string()
    .matches(/man|woman/, 'Введен некорректный e-mail')
    .required('Обязательное поле'),
  advantages: Yup.array().of(Yup.string().required('Заполнить или удалить')),
  radio: Yup.number(),
  checkbox: Yup.array().of(Yup.number()),
  about: Yup.string().required('Обязательное поле').max(200, 'Максимальная длинна 200 символов'),
});
