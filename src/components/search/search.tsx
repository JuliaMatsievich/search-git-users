import * as S from './search.styles';

interface ISearchProps {
  searchUser: string;
  setSearchUser: React.Dispatch<React.SetStateAction<string>>;
  setQuerySearh: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
}

export const Search: React.FC<ISearchProps> = (props) => {
  const { searchUser, setSearchUser, setQuerySearh, isLoading } = props;

  const handleClick = () => {
    setQuerySearh(searchUser);
  };

  return (
    <>
      <S.SearchContainer>
        <S.SearchInput
          value={searchUser}
          onChange={(e) => setSearchUser(e.target.value)}
          placeholder="Поиск"
        />
        <S.Button disabled={isLoading} onClick={handleClick}>
          Найти
        </S.Button>
      </S.SearchContainer>
    </>
  );
};
