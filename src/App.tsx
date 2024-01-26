import { AppRoutes } from './routes';
import * as S from './styles/globalStyles.styles';

const App: React.FC = () => {
  return (
    <>
      <S.GlobalStyle />
      <AppRoutes />
    </>
  );
};

export default App;
