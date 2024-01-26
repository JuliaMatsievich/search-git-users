import { useEffect, useState } from 'react';
import { Header } from './components/header/header';
import { Search } from './components/search/search';
import { useLazyGetUsersQuery } from './services/searchUsersApi';
import * as S from './styles/globalStyles.styles';
import { ISearchUsers, IUser } from './interface';
import { UserList } from './components/userList/userList';
import { useAppSelector } from './hooks/useAppSelector';
import { useAppDispatch } from './hooks/useAppDispatch';
import { setPages } from './store/slices/paginationSlice';

const App = () => {
  const [getUsers, { isLoading }] = useLazyGetUsersQuery();
  const [searchUser, setSearchUser] = useState<string>('');
  const [users, setUsers] = useState<IUser[] | null>([]);
  const [querySearch, setQuerySearh] = useState('');
  const sortType = useAppSelector((state) => state.sort.sortType);
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.pagination.currentPage);

  useEffect(() => {
    if (!querySearch) {
      return;
    } else {
      try {
        getUsers({ name: querySearch, order: sortType, page: currentPage })
          .unwrap()
          .then((data: ISearchUsers) => {
            dispatch(setPages({ totalCount: data.total_count }));
            setUsers(data.items);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, [querySearch, sortType, currentPage]);

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
