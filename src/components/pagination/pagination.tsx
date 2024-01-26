import * as S from './pagination.styles';
import * as CS from '../../styles/commonStyles.styles';
import { useState } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';

export const Pagination: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pages = useAppSelector((state) => state.pagination.pages);

  const handleClickPage = (page: number) => {
    console.log('page', page);
    setCurrentPage(page);
  };

  return (
    <>
      <CS.Container>
        <S.PaginationContainer>
          {pages.map((page, index) => (
            <S.PaginationItem
              $isActive={currentPage === page}
              key={index}
              onClick={() => handleClickPage(page)}
            >
              {page}
            </S.PaginationItem>
          ))}
        </S.PaginationContainer>
      </CS.Container>
    </>
  );
};
