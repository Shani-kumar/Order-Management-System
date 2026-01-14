import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchshippingAddresses = createAsyncThunk('address/fetchshippingAddresses', async () => {
    const response = await axios.get('http://10.0.2.2:5000/address/shipping');
    return response.data; 
  });