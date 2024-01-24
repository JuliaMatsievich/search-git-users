import * as S from './search.styles';
import * as CS from '../../styles/commonStyles.styles';

export const Search: React.FC = () => {
  return (
    <>
      <CS.Container>
        <S.SearchContainer>
          <S.SearchInput placeholder="Поиск" />
        </S.SearchContainer>
      </CS.Container>
    </>
  );
};
