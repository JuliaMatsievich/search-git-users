import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const searchUsersApi = createApi({
  reducerPath: 'searchUsersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2/',
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});
