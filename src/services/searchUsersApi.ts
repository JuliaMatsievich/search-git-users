import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ISearchUsers } from '../interface';

export const searchUsersApi = createApi({
  reducerPath: 'searchUsersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/',
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<ISearchUsers, { name: string; order: string }>({
      query: (arg) => ({
        url: `search/users?q=${arg.name}&sort=repositories&order=${arg.order}`,
        method: 'GET',
        header: { 'X-GitHub-Api-Version': '2022-11-28' },
      }),
    }),
  }),
});

export const { useGetUsersQuery, useLazyGetUsersQuery } = searchUsersApi;
