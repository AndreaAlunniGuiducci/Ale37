import { createSlice } from "@reduxjs/toolkit";

const pointsSlice = createSlice({
  name: "points",
  initialState: 0,
  reducers: {
    addPoint(state) {
      return state + 100;
    },
  },
});

export const { addPoint } = pointsSlice.actions;
export default pointsSlice.reducer;
