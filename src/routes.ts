import { AuthFormPage, AuthPage } from './pages';
import { Routes } from './utils/consts';

export const publicRoutes = [
  {
    path: Routes.AUTH,
    component: AuthPage,
  },
  {
    path: Routes.AUTH_FORM,
    component: AuthFormPage,
  },
];
