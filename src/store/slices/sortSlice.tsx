import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ISortState {
  sortType: string;
}

const initialState: ISortState = {
  sortType: '',
};

export const sortSlice = createSlice({
  name: 'sort',
  initialState: initialState,
  reducers: {
    chooseSortType(state, action: PayloadAction<{ sortType: string }>) {
      state.sortType = action.payload.sortType;
    },
  },
});

export const { chooseSortType } = sortSlice.actions;
export const sortReducer = sortSlice.reducer;
