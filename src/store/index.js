import { configureStore } from "@reduxjs/toolkit";
import leadsReducer from "./leadSlice";

const store = configureStore({
  reducer: {
    leads: leadsReducer,
  },
});

export default store;
