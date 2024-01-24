import * as S from './search.styles';
import * as CS from '../../styles/commonStyles.styles';
import { useRef } from 'react';

interface ISearchProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const Search: React.FC<ISearchProps> = (props) => {
  const { value, setValue } = props;

  const inputRef = useRef(null);

  return (
    <>
      <CS.Container>
        <S.SearchContainer>
          <S.SearchInput ref={inputRef} placeholder="Поиск" />
        </S.SearchContainer>
      </CS.Container>
    </>
  );
};
