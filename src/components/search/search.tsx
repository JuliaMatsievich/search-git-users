import * as S from './search.styles';
import * as CS from '../../styles/commonStyles.styles';

interface ISearchProps {
  searchUser: string;
  setSearchUser: React.Dispatch<React.SetStateAction<string>>;
  setQuerySearh: React.Dispatch<React.SetStateAction<string>>;
}

export const Search: React.FC<ISearchProps> = (props) => {
  const { searchUser, setSearchUser, setQuerySearh } = props;

  const handleClick = () => {
    setQuerySearh(searchUser);
  };

  return (
    <>
      <CS.Container>
        <S.SearchContainer>
          <S.SearchInput
            value={searchUser}
            onChange={(e) => setSearchUser(e.target.value)}
            placeholder="Поиск"
          />
          <S.Button onClick={handleClick}>Найти</S.Button>
        </S.SearchContainer>
      </CS.Container>
    </>
  );
};
