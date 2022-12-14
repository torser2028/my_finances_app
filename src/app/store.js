import { configureStore } from "@reduxjs/toolkit";

import { categoriesApi } from "../redux/api/categories";

export const store = configureStore({
  reducer: {
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoriesApi.middleware),
});
