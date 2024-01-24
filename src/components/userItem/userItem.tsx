import { IUser } from '../../interface';
import * as S from './userItem.styles';

interface IUserItemProps {
  user: IUser;
}

export const UserItem: React.FC<IUserItemProps> = (props) => {
  const { user } = props;

  return (
    <>
      <S.userItemLi>{user.login}</S.userItemLi>
    </>
  );
};
