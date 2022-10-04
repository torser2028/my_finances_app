import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/v1" }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: "/categories",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
