import { sortReducer, initialState } from '../store/slices/sortSlice';

describe('initial state', () => {
  it('check initial state', () => {
    const stateSort = sortReducer(undefined, { type: 'unknown' });

    expect(stateSort).toEqual(initialState);
  });
});
