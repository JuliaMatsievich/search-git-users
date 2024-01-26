import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/mainPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      {/* <Route path="/" element={<Layout />}>
        <Route path="*" element={<NotFound />} />
      </Route> */}
    </Routes>
  );
};
