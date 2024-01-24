import * as S from './userList.styles';
import * as CS from '../styles/commonStyles.styles';

import { IUser } from '../interface';

interface IUserListProps {
  users: IUser[] | null;
}

export const UserList: React.FC<IUserListProps> = (props) => {
  const { users } = props;

  return (
    <>
      <CS.Container>
        <S.UserListUl>
          {users?.map((user) => (
            <S.UserListItem key={user.id}>{user.login}</S.UserListItem>
          ))}
        </S.UserListUl>
      </CS.Container>
    </>
  );
};
