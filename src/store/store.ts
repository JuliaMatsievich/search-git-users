import { configureStore } from '@reduxjs/toolkit';
import { searchUsersApi } from '../services/searchUsersApi';
import { sortReducer } from './slices/sortSlice';
import { paginationReducer } from './slices/paginationSlice';

export const store = configureStore({
  reducer: {
    sort: sortReducer,
    pagination: paginationReducer,
    [searchUsersApi.reducerPath]: searchUsersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(searchUsersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
