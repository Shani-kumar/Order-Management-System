
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchshippingAddresses } from '../services/shippingAddressService';
import { Address } from '../models/addressmodel';




interface AddressState {
  items: Address[];
  loading: boolean;
  error: string | null;
}

const initialState: AddressState = {
  items: [],
  loading: false,
  error: null,
};

const shippingAddressSlice = createSlice({
  name: 'shippingaddress',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchshippingAddresses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchshippingAddresses.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload; 
      })
      .addCase(fetchshippingAddresses.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to load addresses. Please try again later.';
      });
  },
});

export default shippingAddressSlice.reducer;
