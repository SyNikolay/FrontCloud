import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useYupValidationResolver } from 'hooks';
import { authPageValidationSchema, defaultValues, Routes as AppRoutes } from 'utils';
import { AuthFormType } from 'types';
import { MainLayout } from 'layouts';
import { publicRoutes } from 'routes';
import { getIsAuth } from 'components';

function App() {
  const isAuth = useSelector(getIsAuth);
  const resolver = useYupValidationResolver(authPageValidationSchema);
  const form = useForm<AuthFormType>({
    resolver,
    defaultValues,
  });

  return (
    <BrowserRouter>
      <MainLayout>
        <FormProvider {...form}>
          <Routes>
            {publicRoutes.map((el) => (
              <Route key={el.path} path={el.path} Component={el.component} />
            ))}
            <Route path="*" element={<Navigate to={isAuth ? AppRoutes.BASE : AppRoutes.AUTH} replace />} />
          </Routes>
        </FormProvider>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
