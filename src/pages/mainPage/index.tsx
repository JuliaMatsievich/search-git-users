import { useEffect, useState } from 'react';
import { Header } from '../../components/header/header';
import { Search } from '../../components/search/search';
import { useLazyGetUsersQuery } from '../../services/searchUsersApi';
import { ISearchUsers, IUser } from '../../interface';
import { UserList } from '../../components/userList/userList';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setPages } from '../../store/slices/paginationSlice';
import { Loader } from '../../components/loader/loader';
import * as CS from '../../styles/commonStyles.styles';
import * as S from './mainPgae.styles';

export const MainPage = () => {
  const [getUsers, { isLoading }] = useLazyGetUsersQuery();
  const [searchUser, setSearchUser] = useState<string>('');
  const [users, setUsers] = useState<IUser[]>([]);
  const [querySearch, setQuerySearh] = useState<string>('');
  const sortType = useAppSelector((state) => state.sort.sortType);
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.pagination.currentPage);
  console.log('querySearch', querySearch.length);
  console.log('users', users.length);

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
      <Header />
      <CS.Container>
        <Search
          searchUser={searchUser}
          setQuerySearh={setQuerySearh}
          setSearchUser={setSearchUser}
        />
        {isLoading && <Loader />}
        {users?.length === 0 &&
        querySearch.length === 0 ? null : users?.length === 0 &&
          querySearch.length > 0 ? (
          <S.SearchNotFound>
            Ничего не найдено. Попробуйте поменять параметры поиска
          </S.SearchNotFound>
        ) : (
          <UserList users={users} />
        )}
      </CS.Container>
    </>
  );
};
