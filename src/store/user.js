import { createSlice } from "@reduxjs/toolkit";
const user = createSlice({
  name: "user",
  initialState: {
    userDetail: {},
  },
  reducers: {
    addUser: (store) => {
      store.userDetail.name = "Prakash";
      store.userDetail.email = "Prakashkumar@gmail.com";
    },
  },
});
export const { addUser } = user.actions;
export default user.reducer;
