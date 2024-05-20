import { configureStore } from "@reduxjs/toolkit";
import userDetails from "./userDetailsSlice";

export const store = configureStore({
  reducer: {
    app: userDetails,
  },
});
