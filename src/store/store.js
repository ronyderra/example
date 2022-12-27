import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "./dataSlice";
import { configureUser } from "./configureUserSlice";

export default configureStore({
  reducer: {
    data: dataSlice.reducer,
    configureUser: configureUser.reducer,
  },
});
