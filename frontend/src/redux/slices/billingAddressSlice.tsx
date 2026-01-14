
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchbillingAddresses } from '../services/billingAddressService';
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

const billingAddressSlice = createSlice({
  name: 'billingaddress',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchbillingAddresses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchbillingAddresses.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload; 
      })
      .addCase(fetchbillingAddresses.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to load addresses. Please try again later.';
      });
  },
});

export default billingAddressSlice.reducer;
