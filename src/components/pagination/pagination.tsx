import * as S from './pagination.styles';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setCurrentPage } from '../../store/slices/paginationSlice';

export const Pagination: React.FC = () => {
  const pages = useAppSelector((state) => state.pagination.pages);
  const currentPage = useAppSelector((state) => state.pagination.currentPage);
  const dispatch = useAppDispatch();

  const handleClickPage = (page: number) => {
    dispatch(setCurrentPage({ currentPage: page }));
  };

  return (
    <>
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
    </>
  );
};
