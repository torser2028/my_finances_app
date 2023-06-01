import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loadingCategories: false,
  categoriesHasErrors: false,
  categories: [],
};

const API_URL = 'http://localhost:3001/api/v1';
// A slice
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.categories.unshift(action.payload);
    },
    startLoading: (state) => {
      state.loadingCategories = true;
    },
    getCategoriesSuccess: (state, action) => {
      state.categories = action.payload.categories;
      state.loadingCategories = false;
      state.categoriesHasErrors = false;
    },
    getCategoriesFailure: (state) => {
      state.loadingCategories = false;
      //handling Errors
      state.categoriesHasErrors = true;
    },
  },
});

// Actions generated from the slice
const {
  addCategory,
  startLoading,
  getCategoriesFailure,
  getCategoriesSuccess,
} = categoriesSlice.actions;

// export user selector to get the slice in any component
export const categoriesSelector = (state) => state.categories;
// export The reducer
const categoryReducer = categoriesSlice.reducer;
export default categoryReducer;
// Actions
export const fetchCategories = () => async (dispatch) => {
  try {
    dispatch(startLoading());
    const response = await fetch(`${API_URL}/categories`);
    const data = await response.json();
    dispatch(getCategoriesSuccess(data));
  } catch (error) {
    dispatch(getCategoriesFailure());
  }
};

export const createCategory = (category) => async (dispatch) => {
  try {
    const response = await fetch(`${API_URL}/categories`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(category),
    });
    const data = await response.json();
    dispatch(getCategoriesSuccess(data));
  } catch (error) {
    dispatch(getCategoriesFailure());
  }
};
