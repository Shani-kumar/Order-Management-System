
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts } from '../services/productService'; 

import {Product,ProductState} from '../models/Productmodel'

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

export const fetchProductsAsync = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetchProducts(); 
  return response;
});

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProductsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
      });
  },
});

export default productSlice.reducer;
