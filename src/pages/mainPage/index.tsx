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
  const [getUsers, { isLoading, isError }] = useLazyGetUsersQuery();
  const [searchUser, setSearchUser] = useState<string>('');
  const [users, setUsers] = useState<IUser[]>([]);
  const [querySearch, setQuerySearh] = useState<string>('');
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
      <Header />
      <CS.Container>
        <Search
          searchUser={searchUser}
          setQuerySearh={setQuerySearh}
          setSearchUser={setSearchUser}
          isLoading={isLoading}
        />
        {isLoading && <Loader />}
        {isError && (
          <S.ErrorContainer>
            Что-то пошло не так, попробуйте позже
          </S.ErrorContainer>
        )}
        {users?.length === 0 && querySearch.length === 0 && !Error && null}
        {users?.length === 0 && querySearch.length > 0 && !isError && (
          <S.SearchNotFound>
            Ничего не найдено. Попробуйте поменять параметры поиска
          </S.SearchNotFound>
        )}
        {users?.length !== 0 && querySearch.length > 0 && !isError && (
          <UserList users={users} />
        )}
      </CS.Container>
    </>
  );
};
