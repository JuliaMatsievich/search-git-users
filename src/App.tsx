import { Header } from './components/header/header';
import * as S from './styles/globalStyles.styles';

const App = () => {
  return (
    <>
      <S.GlobalStyle />
      <Header />
      <p>Header</p>
    </>
  );
};

export default App;
