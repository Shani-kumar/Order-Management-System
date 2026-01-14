
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SelectedAddressState {
  selectedAddress: number | null;
}

const initialState: SelectedAddressState = {
  selectedAddress: null,
};

const selectedAddressSlice = createSlice({
  name: 'selectedAddress',
  initialState,
  reducers: {
    setSelectedAddress: (state, action: PayloadAction<number | null>) => {
      state.selectedAddress = action.payload;
    },
  },
});

export const { setSelectedAddress } = selectedAddressSlice.actions;
export default selectedAddressSlice.reducer;
