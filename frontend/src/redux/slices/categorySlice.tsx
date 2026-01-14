


import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories} from '../services/categoryService'; 
import {category} from '../models/categorymodel'

interface CategoryState {
  items: category[]; 
  loading: boolean;
  error: string | null;
}

const initialState: CategoryState = {
  items: [],
  loading: false,
  error: null,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload; 
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to load categories. Please try again later.';
      })
    
  },
});

export default categorySlice.reducer;
