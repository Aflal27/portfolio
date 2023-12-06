import { createSlice } from "@reduxjs/toolkit";

const darkSlice = createSlice({
  name: "darkmood",
  initialState: {
    dark: false,
  },
  reducers: {
    darkmoodSuccess(state, action) {
      return {
        ...state,
        dark: action.payload,
      };
    },
  },
});

const { actions, reducer } = darkSlice;
export const { darkmoodSuccess } = actions;
export default reducer;
