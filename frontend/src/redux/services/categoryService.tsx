import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchCategories = createAsyncThunk('category/fetchCategories', async () => {
  const response = await axios.get('http://10.0.2.2:5000/categories');
  return response.data; 
});
