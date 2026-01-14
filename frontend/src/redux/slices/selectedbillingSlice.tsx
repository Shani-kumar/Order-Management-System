
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface selectedbillingState {
  selectedbilling: number | null;
}

const initialState: selectedbillingState = {
  selectedbilling: null,
};

const selectedbillingSlice = createSlice({
  name: 'selectedbilling',
  initialState,
  reducers: {
    setselectedbilling: (state, action: PayloadAction<number | null>) => {
      state.selectedbilling = action.payload;
    },
  },
});

export const { setselectedbilling } = selectedbillingSlice.actions;
export default selectedbillingSlice.reducer;
