import { createSlice } from "@reduxjs/toolkit";

const initialValues = "red";

export const themeSlice = createSlice({
  name: "theme",
  initialState: { value: initialValues },
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeColor } = themeSlice.actions;
export default themeSlice.reducer;
