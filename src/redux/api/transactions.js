import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const transactionsApi = createApi({
  reducerPath: 'transactionsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/v1' }),
  endpoints: (builder) => ({
    getTransactions: builder.query({
      query: () => ({
        url: '/transactions',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetTransactionsQuery } = transactionsApi;
