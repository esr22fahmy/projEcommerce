import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  itemsData: [],
};

const apiItems = createSlice({
  name: "api",
  initialState,
  reducers: {
    setApiData: (state, action) => {
      state.itemsData = action.payload;
    },

    
  },
});

export const { setApiData } = apiItems.actions;


export default apiItems.reducer;

// Thunk action to fetch data from the API
export const fetchApiData = (category) => async (dispatch) => {
  try {
    let url = "https://fakestoreapi.com/products";
    if (category) {
      url = `https://fakestoreapi.com/products/category/${category}`;
    }
    const response = await axios.get(url);
    dispatch(setApiData(response.data));
  } catch (error) {
    // Handle error
  }
};
