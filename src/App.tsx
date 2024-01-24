import { useEffect, useState } from 'react';
import { Header } from './components/header/header';
import { Search } from './components/search/search';
import {
  useGetUsersQuery,
  useLazyGetUsersQuery,
} from './services/searchUsersApi';
import * as S from './styles/globalStyles.styles';
import { ISearchUsers, IUser } from './interface';

const App = () => {
  // const { data? users } = useGetUsersQuery(null);
  const [getUsers, { isLoading }] = useLazyGetUsersQuery();
  const [value, setValue] = useState<string>('');
  const [searchUsers, setsearchUsers] = useState<IUser[]>([]);

  // console.log('data', data);

  useEffect(() => {
    try {
      getUsers('ma')
        .unwrap()
        .then((data: ISearchUsers) => {
          console.log('data', data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <S.GlobalStyle />
      <Header />
      <Search value={value} setValue={setValue} />
    </>
  );
};

export default App;
