
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProductSpecs } from '../services/productspecsService';
import { ProductSpecs } from '../models/productspecs';



interface ProductSpecsState {
  productSpecs: ProductSpecs[]; 
  loading: boolean;
  error: string | null;
}

const initialState: ProductSpecsState = {
  productSpecs: [],
  loading: false,
  error: null,
};

export const fetchProductSpecifications = createAsyncThunk(
  'productspecs/fetchProductSpecifications',
  async (productId: string) => {
    const response = await fetchProductSpecs(productId);
    return response;
  }
);

const productspecsSlice = createSlice({
  name: 'productspecs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductSpecifications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductSpecifications.fulfilled, (state, action) => {
        state.loading = false;
        state.productSpecs = action.payload;
      })
      .addCase(fetchProductSpecifications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load product specifications';
      });
  },
});

export default productspecsSlice.reducer;
