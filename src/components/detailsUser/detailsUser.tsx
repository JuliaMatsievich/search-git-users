import * as S from './detailsUser.styles';

import { IUser } from '../../interface';

interface IDetailsUserProps {
  user: IUser;
}

export const DetailsUser: React.FC<IDetailsUserProps> = (props) => {
  const { user } = props;

  return (
    <>
      <S.DetailsUserContainer>
        <S.DetailsUserFoto>
          <S.DetailsUserImg src={user.avatar_url} />
        </S.DetailsUserFoto>

        <S.DetailsUserContent>
          <S.DetailsUserName>
            Имя пользователя:{' '}
            <S.DetailsUserNameSpan>{user.login}</S.DetailsUserNameSpan>
          </S.DetailsUserName>

          <S.DetailsUserGitAccount>
            Ссылка на GitHub:{' '}
            <S.DetailsUserGitAccountLink href={user.html_url} target="_blank">
              {user.html_url}
            </S.DetailsUserGitAccountLink>
          </S.DetailsUserGitAccount>
        </S.DetailsUserContent>
      </S.DetailsUserContainer>
    </>
  );
};
