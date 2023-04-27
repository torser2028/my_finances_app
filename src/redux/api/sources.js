import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const sourcesApi = createApi({
  reducerPath: 'sourcesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/v1' }),
  endpoints: (builder) => ({
    getSources: builder.query({
      query: () => ({
        url: '/sources',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetSourcesQuery } = sourcesApi;
