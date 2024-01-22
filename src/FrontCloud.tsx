import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Routes as AppRoutes } from 'utils';
import { MainLayout } from 'layouts';
import { publicRoutes } from 'routes';
import { getIsAuth } from 'components';

function App() {
  const isAuth = useSelector(getIsAuth);

  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          {publicRoutes.map((el) => (
            <Route key={el.path} path={el.path} Component={el.component} />
          ))}
          <Route path="*" element={<Navigate to={isAuth ? AppRoutes.BASE : AppRoutes.AUTH} replace />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
