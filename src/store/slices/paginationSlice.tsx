import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PER_PAGE } from '../../constants/url';
import { getArrayOfNumbers } from '../../helpFunc/getArrayNumbers';

interface IPaginationState {
  totalCount: number;
  pages: number[];
  currentPage: number;
}

export const initialState: IPaginationState = {
  totalCount: 0,
  pages: [1],
  currentPage: 1,
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState: initialState,
  reducers: {
    setPages(state, action: PayloadAction<{ totalCount: number }>) {
      const { totalCount } = action.payload;
      if (totalCount > 1000) {
        state.pages = getArrayOfNumbers(34);
      } else {
        state.pages = getArrayOfNumbers(Math.ceil(totalCount / PER_PAGE));
      }
    },
    setCurrentPage(state, action: PayloadAction<{ currentPage: number }>) {
      state.currentPage = action.payload.currentPage;
    },
  },
});

export const { setPages, setCurrentPage } = paginationSlice.actions;
export const paginationReducer = paginationSlice.reducer;
