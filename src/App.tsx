import { Header } from './components/header/header';
import { Search } from './components/search/search';
import * as S from './styles/globalStyles.styles';

const App = () => {
  return (
    <>
      <S.GlobalStyle />
      <Header />
      <Search />
    </>
  );
};

export default App;
