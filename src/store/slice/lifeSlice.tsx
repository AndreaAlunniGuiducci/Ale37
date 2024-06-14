import { createSlice } from "@reduxjs/toolkit";

const lifeSlice = createSlice({
  name: "lifes",
  initialState: 3,
  reducers: {
    loseLife(state) {
      return state - 1;
    },
  },
});

export const { loseLife } = lifeSlice.actions;
export default lifeSlice.reducer;
