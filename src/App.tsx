import { useEffect, useState } from 'react';
import { Header } from './components/header/header';
import { Search } from './components/search/search';
import {
  useGetUsersQuery,
  useLazyGetUsersQuery,
} from './services/searchUsersApi';
import * as S from './styles/globalStyles.styles';
import { ISearchUsers, IUser } from './interface';
import { UserList } from './userList/userList';

const App = () => {
  // const { data? users } = useGetUsersQuery(null);
  const [getUsers, { isLoading }] = useLazyGetUsersQuery();
  const [searchUser, setSearchUser] = useState<string>('');
  const [users, setUsers] = useState<IUser[] | null>([]);
  const [querySearch, setQuerySearh] = useState('');

  // console.log('data', data);

  useEffect(() => {
    if (!querySearch) {
      return;
    } else {
      try {
        getUsers(querySearch)
          .unwrap()
          .then((data: ISearchUsers) => {
            setUsers(data.items);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, [querySearch]);

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
