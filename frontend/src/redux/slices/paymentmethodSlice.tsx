
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PaymentMethod {
  id: string;
  label: string;
}

interface PaymentState {
  selectedPayment: PaymentMethod | null;
}

const initialState: PaymentState = {
  selectedPayment: { id: '1', label: 'Credit Card' }, 
};

const paymentmethodSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setSelectedPayment: (state, action: PayloadAction<PaymentMethod>) => {
      state.selectedPayment = action.payload;
    },
  },
});

export const { setSelectedPayment } = paymentmethodSlice.actions;
export default paymentmethodSlice.reducer;
