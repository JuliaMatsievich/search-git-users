import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/mainPage';
import { NotFound } from './pages/notfound';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/*" element={<NotFound />}></Route>
    </Routes>
  );
};
