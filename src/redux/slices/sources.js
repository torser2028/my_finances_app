import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loadingSources: false,
  sourcesHasErrors: false,
  sources: [],
};

const API_URL = 'http://localhost:3001/api/v1';
// A slice
const sourceSlice = createSlice({
  name: 'sources',
  initialState,
  reducers: {
    addSource: (state, action) => {
      state.sources.unshift(action.payload);
    },
    startLoading: (state) => {
      state.loadingSources = true;
    },
    getSourcesSuccess: (state, action) => {
      state.sources = action.payload;
      state.loadingSources = false;
      state.sourcesHasErrors = false;
    },
    getSourcesFailure: (state) => {
      state.loadingSources = false;
      //handling Errors
      state.sourcesHasErrors = true;
    },
  },
});

// Actions generated from the slice
const { addSource, startLoading, getSourcesFailure, getSourcesSuccess } =
  sourceSlice.actions;

// export user selector to get the slice in any component
export const sourcesSelector = (state) => state.sources;
// export The reducer
const sourceReducer = sourceSlice.reducer;
export default sourceReducer;
// Actions
export const fetchSources = () => async (dispatch) => {
  try {
    dispatch(startLoading());
    const response = await fetch(`${API_URL}/sources`);
    const data = await response.json();
    dispatch(getSourcesSuccess(data));
  } catch (error) {
    dispatch(getSourcesFailure());
  }
};

export const createSource = (source) => async (dispatch) => {
  try {
    const response = await fetch(`${API_URL}/sources`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(source),
    });
    const data = await response.json();
    dispatch(getSourcesSuccess(data));
  } catch (error) {
    dispatch(getSourcesFailure());
  }
};
