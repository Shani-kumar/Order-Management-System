
import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './slices/categorySlice'; 
import shippingAddressReducer from './slices/shippingAddressSlice'
import billingAddressReducer from './slices/billingAddressSlice'
import productReducer from './slices/productSlice';
import productspecsReducer from './slices/productspecsSlice';
import cartItemReducer from './slices/CartItemSlice';
import selectedAddressReducer from './slices/selectedAddressSlice';
import selectedbillingReducer from './slices/selectedbillingSlice';
import paymentmethodReducer from './slices/paymentmethodSlice'
import searchTextReducer from './slices/searchtextSlice'

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    shippingAddress: shippingAddressReducer,
    billingAddress: billingAddressReducer,
    product: productReducer,
    productspecs: productspecsReducer,
    cart: cartItemReducer,
    selectedAddress: selectedAddressReducer,
    selectedbilling:selectedbillingReducer,
    paymentmethod: paymentmethodReducer,
    searchText:searchTextReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
