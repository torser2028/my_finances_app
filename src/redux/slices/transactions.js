import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  hasErrors: false,
  transactions: [],
};

const API_URL = 'http://localhost:3001/api/v1';
// A slice
const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.unshift(action.payload);
    },
    startLoading: (state) => {
      state.loading = true;
    },
    getTransactionsSuccess: (state, action) => {
      state.transactions = action.payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getTransactionsFailure: (state) => {
      state.loading = false;
      //handling Errors
      state.hasErrors = true;
    },
  },
});

// Actions generated from the slice
const {
  addTransaction,
  startLoading,
  getTransactionsFailure,
  getTransactionsSuccess,
} = transactionsSlice.actions;

// export user selector to get the slice in any component
export const transactionsSelector = (state) => state.transactions;
// export The reducer
const transactionReducer = transactionsSlice.reducer;
export default transactionReducer;
// Actions
export const fetchTransactions = () => async (dispatch) => {
  try {
    dispatch(startLoading());
    const response = await fetch(`${API_URL}/transaction`);
    const data = await response.json();
    dispatch(getTransactionsSuccess(data));
  } catch (error) {
    dispatch(getTransactionsFailure());
  }
};

export const createTransaction = (transaction) => async (dispatch) => {
  console.log('createTransaction: ', transaction);
  try {
    const response = await fetch(`${API_URL}/transactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transaction),
    });
    console.log('createTransaction response: ', response);
    const data = await response.json();
    console.log('createTransaction data: ', data);
    dispatch(getTransactionsSuccess(data));
  } catch (error) {
    dispatch(getTransactionsFailure());
  }
};
