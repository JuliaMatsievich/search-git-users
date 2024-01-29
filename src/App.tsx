import * as S from './styles/globalStyles.styles';
import { AppRoutes } from './routes';

const App: React.FC = () => {
  return (
    <>
      <S.GlobalStyle />
      <AppRoutes />
    </>
  );
};

export default App;
