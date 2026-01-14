import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchbillingAddresses = createAsyncThunk('address/fetchbillingAddresses', async () => {
    const response = await axios.get('http://10.0.2.2:5000/address/billing');
    return response.data; 
  });