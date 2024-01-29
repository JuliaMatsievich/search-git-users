import {
  sortReducer,
  initialState,
  chooseSortType,
} from '../store/slices/sortSlice';

describe('reducer chooseSortType', () => {
  it('check chooseSortType', () => {
    const TypeSort = 'desc';

    const chooseSortTypeState = sortReducer(
      initialState,
      chooseSortType({ sortType: TypeSort }),
    );

    expect(chooseSortTypeState.sortType).toBe('desc');
  });
});
