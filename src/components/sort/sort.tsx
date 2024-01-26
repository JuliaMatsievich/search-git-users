import * as S from './sort.styles';
import * as CS from '../../styles/commonStyles.styles';
import Select, { OnChangeValue, PropsValue } from 'react-select';
import { useEffect, useState } from 'react';
import { IOption } from '../../interface';

const options: IOption[] = [
  { value: 'desc', label: 'По возрастанию' },
  { value: 'asc', label: 'По убыванию' },
];

interface ISortProps {}

export const Sort: React.FC<ISortProps> = (props) => {
  const {} = props;

  const [sortType, setSortType] = useState<string>('');

  const getValue = (): PropsValue<IOption> | undefined => {
    return sortType ? options.find((st) => st.value === sortType) : undefined;
  };

  const onChange = (newValue: OnChangeValue<IOption, boolean>) => {
    setSortType((newValue as IOption).value);
  };

  useEffect(() => {
    console.log('sortType', sortType);
  }, [sortType]);

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
            />
          </S.SortSelectContainer>
        </S.SortContainer>
      </CS.Container>
    </>
  );
};
