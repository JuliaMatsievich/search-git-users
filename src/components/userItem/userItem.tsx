import { useState } from 'react';
import { IUser } from '../../interface';
import * as S from './userItem.styles';
import { DetailsUser } from '../detailsUser/detailsUser';

interface IUserItemProps {
  user: IUser;
}

export const UserItem: React.FC<IUserItemProps> = (props) => {
  const { user } = props;
  const [isDetails, setIsDetails] = useState<boolean>(false);

  const handleClickDetails = () => {
    setIsDetails(!isDetails);
  };

  return (
    <>
      <S.userItemLi onClick={handleClickDetails}>
        {user.login}
        {isDetails ? <DetailsUser user={user} /> : null}
      </S.userItemLi>
    </>
  );
};
