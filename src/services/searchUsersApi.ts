import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ISearchUsers } from '../interface';
import { BASE_URL, PER_PAGE } from '../constants/url';

export const searchUsersApi = createApi({
  reducerPath: 'searchUsersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<
      ISearchUsers,
      { name: string; order: string; page: number }
    >({
      query: (arg) => ({
        url: `search/users?q=${arg.name}&sort=repositories&order=${arg.order}&per_page=${PER_PAGE}&page=${arg.page}`,
        method: 'GET',
        header: { 'X-GitHub-Api-Version': '2022-11-28' },
      }),
    }),
  }),
});

export const { useGetUsersQuery, useLazyGetUsersQuery } = searchUsersApi;
