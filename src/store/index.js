import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./user";
import user from "./user";
const store = configureStore({
  reducer: {
    user: user,
  },
});
export default store;
