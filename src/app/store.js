import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { categoriesApi } from '../redux/api/categoriesApi';
import { sourcesApi } from '../redux/api/sources';
import { transactionsApi } from '../redux/api/transactions';
import categoryReducer from '../redux/slices/categories';
import transactionReducer from '../redux/slices/transactions';
import sourceReducer from '../redux/slices/sources';

export const store = configureStore({
  reducer: {
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [sourcesApi.reducerPath]: sourcesApi.reducer,
    [transactionsApi.reducerPath]: transactionsApi.reducer,
    categories: categoryReducer,
    transactions: transactionReducer,
    sources: sourceReducer,
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
// setupListeners(store.dispatch);
