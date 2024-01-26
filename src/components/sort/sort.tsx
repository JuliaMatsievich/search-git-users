import * as S from './sort.styles';
import * as CS from '../../styles/commonStyles.styles';
import Select, { OnChangeValue, PropsValue } from 'react-select';
import { IOption } from '../../interface';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { chooseSortType } from '../../store/slices/sortSlice';

const options: IOption[] = [
  { value: 'desc', label: 'По возрастанию' },
  { value: 'asc', label: 'По убыванию' },
];

export const Sort: React.FC = () => {
  const sortType = useAppSelector((state) => state.sort.sortType);
  const dispatch = useAppDispatch();

  const getValue = (): PropsValue<IOption> | undefined => {
    return sortType ? options.find((st) => st.value === sortType) : undefined;
  };

  const onChange = (newValue: OnChangeValue<IOption, boolean> | null) => {
    if (newValue === null) {
      dispatch(chooseSortType({ sortType: '' }));
    } else {
      dispatch(chooseSortType({ sortType: (newValue as IOption).value }));
    }
  };

  return (
    <>
      <CS.Container>
        <S.SortContainer>
          <S.SortText>Сортировка по количеству репозиториев:</S.SortText>
          <S.SortSelectContainer>
            <Select
              onChange={onChange}
              options={options}
              value={getValue()}
              placeholder="Выберите"
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary25: '#3196ad2f',
                  primary: '#3197ad',
                },
              })}
              isClearable
            />
          </S.SortSelectContainer>
        </S.SortContainer>
      </CS.Container>
    </>
  );
};
