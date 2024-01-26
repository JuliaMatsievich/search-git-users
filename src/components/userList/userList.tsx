import * as S from './userList.styles';
import * as CS from '../../styles/commonStyles.styles';

import { IUser } from '../../interface';
import { UserItem } from '../userItem/userItem';
import { Sort } from '../sort/sort';
import { Pagination } from '../pagination/pagination';

interface IUserListProps {
  users: IUser[] | null;
}

export const UserList: React.FC<IUserListProps> = (props) => {
  const { users } = props;

  return (
    <>
      <CS.Container>
        <Sort />
        <S.UserListUl>
          {users?.map((user) => <UserItem key={user.id} user={user} />)}
        </S.UserListUl>
        <Pagination />
      </CS.Container>
    </>
  );
};
