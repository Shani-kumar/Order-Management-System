
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchTextState {
  searchText: string;
}

const initialState: SearchTextState = {
  searchText: "",
};

const searchTextSlice = createSlice({
  name: 'searchText',
  initialState,
  reducers: {
    setsearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
  },
});

export const { setsearchText } = searchTextSlice.actions;
export default searchTextSlice.reducer;
