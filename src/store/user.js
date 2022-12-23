import { createSlice } from "@reduxjs/toolkit";
const user = createSlice({
  name: "user",
  initialState: {
    userDetail: {},
  },
  reducers: {
    addUser: (state, action) => {
      state.userDetail.username = action.payload.username;
      state.userDetail.password = action.payload.password;
    },
    logout: (state) => {
      state.userDetail = {};
    },
  },
});
export const { addUser, logout } = user.actions;
export default user.reducer;
