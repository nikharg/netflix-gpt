import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toggleGptState: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export const { toggleGptState } = gptSlice.actions;

export default gptSlice.reducer;
