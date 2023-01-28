import { createSlice } from "@reduxjs/toolkit";

const initialValues = { username: "Not Logged In", password: "" };

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialValues },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialValues;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
