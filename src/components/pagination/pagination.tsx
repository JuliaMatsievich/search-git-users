import * as S from './pagination.styles';
import * as CS from '../../styles/commonStyles.styles';
import { useState } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';

export const Pagination: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pages = useAppSelector((state) => state.pagination.pages);
  console.log('pages', pages);

  const handleClickPage = () => {
    console.log('page');
  };

  return (
    <>
      <CS.Container>
        <S.PaginationContainer>
          {pages.map((page, index) => (
            <S.PaginationItem key={index} onClick={handleClickPage}>
              {page}
            </S.PaginationItem>
          ))}
        </S.PaginationContainer>
      </CS.Container>
    </>
  );
};
