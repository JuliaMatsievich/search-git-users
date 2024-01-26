import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ISearchUsers } from '../interface';

export const searchUsersApi = createApi({
  reducerPath: 'searchUsersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/',
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<ISearchUsers, string>({
      query: (name) => ({
        url: `search/users?q=${name}&sort=repositories&order=asc`,
        method: 'GET',
        header: { 'X-GitHub-Api-Version': '2022-11-28' },
      }),
    }),
  }),
});

export const { useGetUsersQuery, useLazyGetUsersQuery } = searchUsersApi;
