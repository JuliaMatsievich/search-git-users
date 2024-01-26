import { useEffect, useState } from 'react';
import { Header } from './components/header/header';
import { Search } from './components/search/search';
import { useLazyGetUsersQuery } from './services/searchUsersApi';
import * as S from './styles/globalStyles.styles';
import { ISearchUsers, IUser } from './interface';
import { UserList } from './userList/userList';
import { useAppSelector } from './hooks/useAppSelector';

const App = () => {
  const [getUsers, { isLoading }] = useLazyGetUsersQuery();
  const [searchUser, setSearchUser] = useState<string>('');
  const [users, setUsers] = useState<IUser[] | null>([]);
  const [querySearch, setQuerySearh] = useState('');
  const sortType = useAppSelector((state) => state.sort.sortType);

  useEffect(() => {
    if (!querySearch) {
      return;
    } else {
      try {
        getUsers({ name: querySearch, order: sortType })
          .unwrap()
          .then((data: ISearchUsers) => {
            setUsers(data.items);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, [querySearch, sortType]);

  return (
    <>
      <S.GlobalStyle />
      <Header />
      <Search
        searchUser={searchUser}
        setQuerySearh={setQuerySearh}
        setSearchUser={setSearchUser}
      />
      {querySearch ? <UserList users={users} /> : null}
    </>
  );
};

export default App;
