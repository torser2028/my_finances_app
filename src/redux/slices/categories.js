import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { categoriesApi } from '../api/categoriesApi';

// Thunk action to fetch all categories
export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    console.log('fetchCategories');
    const response = await categoriesApi.getCategories();
    console.log('fetchCategories response', response);
    return response.data;
  },
);

// Thunk action to fetch a single category
export const fetchCategory = createAsyncThunk(
  'categories/fetchCategory',
  async (categoryId) => {
    const response = await categoriesApi.getCategory(categoryId);
    return response.data;
  },
);

// Thunk action to update a category
export const updateCategory = createAsyncThunk(
  'categories/updateCategory',
  async ({ categoryId, category }) => {
    const response = await categoriesApi.updateCategory(categoryId, category);
    return response.data;
  },
);

// Thunk action to delete a category
export const deleteCategory = createAsyncThunk(
  'categories/deleteCategory',
  async (categoryId) => {
    await categoriesApi.deleteCategory(categoryId);
    return categoryId;
  },
);

// Thunk action to create a new category
export const createCategory = createAsyncThunk(
  'categories/createCategory',
  async (category) => {
    const response = await categoriesApi.createCategory(category);
    return response.data;
  },
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    selectedCategory: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchCategory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedCategory = action.payload;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateCategory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const updatedCategory = action.payload;
        state.categories = state.categories.map((category) =>
          category.id === updatedCategory.id ? updatedCategory : category,
        );
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteCategory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const categoryId = action.payload;
        state.categories = state.categories.filter(
          (category) => category.id !== categoryId,
        );
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createCategory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const newCategory = action.payload;
        state.categories.push(newCategory);
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;
