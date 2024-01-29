import * as S from './header.styles';
import * as CS from '../../styles/commonStyles.styles';

export const Header: React.FC = () => {
  return (
    <>
      <S.HeaderHeader>
        <CS.Container>
          <S.HeaderContainer>
            <S.Img src="/search-git-users/img/github-logo.png"></S.Img>
            <S.Title>GitHub Search Users</S.Title>
          </S.HeaderContainer>
        </CS.Container>
      </S.HeaderHeader>
    </>
  );
};
