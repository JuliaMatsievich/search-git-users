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
  const totalCount = useAppSelector((state) => state.pagination.totalCount);
  const dispatch = useAppDispatch();

  //   async function getPaginatedData(url: any) {
  //     const nextPattern = /(?<=<)([\S]*)(?=>; rel="Next")/i;
  //     let pagesRemaining = true;
  //     let data = [];

  //     while (pagesRemaining) {
  //       const response =  await getUsers({
  //         name: querySearch,
  //         order: sortType,
  //       }).unwrap();

  //       const parsedData = parseData(response.data);
  //       data = [...data, ...parsedData];

  //       const linkHeader = response.headers.link;

  //       pagesRemaining = linkHeader && linkHeader.includes(`rel=\"next\"`);

  //       if (pagesRemaining) {
  //         url = linkHeader.match(nextPattern)[0];
  //       }
  //     }

  //     return data;
  //   }

  // function parseData(data) {
  //   // If the data is an array, return that
  //   if (Array.isArray(data)) {
  //     return data;
  //   }

  //   // Some endpoints respond with 204 No Content instead of empty array
  //   //   when there is no data. In that case, return an empty array.
  //   if (!data) {
  //     return [];
  //   }

  //   // Otherwise, the array of items that we want is in an object
  //   // Delete keys that don't include the array of items
  //   delete data.incomplete_results;
  //   delete data.repository_selection;
  //   delete data.total_count;
  //   // Pull out the array of items
  //   const namespaceKey = Object.keys(data)[0];
  //   data = data[namespaceKey];

  //   return data;
  // }

  // const data = await getPaginatedData('/repos/octocat/Spoon-Knife/issues');

  // console.log(data);

  useEffect(() => {
    if (!querySearch) {
      return;
    } else {
      try {
        getUsers({ name: querySearch, order: sortType })
          .unwrap()
          .then((data: ISearchUsers) => {
            dispatch(setPages({ totalCount: data.total_count }));
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
