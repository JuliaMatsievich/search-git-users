import {
  paginationReducer,
  initialState,
} from '../store/slices/paginationSlice';

describe('initial state', () => {
  it('check initial state', () => {
    const statePagination = paginationReducer(undefined, { type: 'unknown' });

    expect(statePagination).toEqual(initialState);
  });
});
