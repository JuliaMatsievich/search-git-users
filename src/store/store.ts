import { configureStore } from '@reduxjs/toolkit';
import { searchUsersApi } from '../services/searchUsersApi';

export const store = configureStore({
  reducer: {
    [searchUsersApi.reducerPath]: searchUsersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(searchUsersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
