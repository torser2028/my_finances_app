import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import categoryReducer from '../redux/slices/categories';
import transactionReducer from '../redux/slices/transactions';
import sourceReducer from '../redux/slices/sources';

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    transactions: transactionReducer,
    sources: sourceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch);
