import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { categoriesApi } from '../redux/api/categories';
import { sourcesApi } from '../redux/api/sources';
import { transactionsApi } from '../redux/api/transactions';

export const store = configureStore({
  reducer: {
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [sourcesApi.reducerPath]: sourcesApi.reducer,
    [transactionsApi.reducerPath]: transactionsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      categoriesApi.middleware,
      sourcesApi.middleware,
      transactionsApi.middleware,
    ),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
