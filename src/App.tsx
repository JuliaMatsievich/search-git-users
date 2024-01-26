import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import * as S from './styles/globalStyles.styles';
import { MainPage } from './pages/mainPage';
import { NotFound } from './pages/notfound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <NotFound />,
  },
]);

const App: React.FC = () => {
  return (
    <>
      <S.GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
