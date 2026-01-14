
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCartItems, deleteCartItem } from '../services/cartItemsService'
import { CartItem } from '../models/CartItemsmodel';

interface CartState {
  items: CartItem[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CartState = {
  items: [],
  status: 'idle',
};

export const getCartItems = createAsyncThunk('cart/fetchCartItems', async () => {
  return await fetchCartItems();
});

export const removeCartItem = createAsyncThunk('cart/deleteCartItem', async (id: number) => {
  await deleteCartItem(id);
  return id;
});


const cartItemSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) item.quantity = quantity;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'idle';
      })
      .addCase(removeCartItem.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      })
      // .addCase(additemstocart.pending,(state) =>{
      //   state.status = 'loading';
      // })
      // .addCase(additemstocart.rejected ,(state)=>{
      //   state.status='failed';
      // })
  },
});

export const { updateItemQuantity } = cartItemSlice.actions;
export default cartItemSlice.reducer;
