import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import apiReducer from "./apiItems";
import searchReducer from './searchSlice'

export const store = configureStore({
  reducer: {
    counterAy7aga: counterReducer,
    api: apiReducer,
    search: searchReducer, // الحالة المضافة للبحث

  },
});