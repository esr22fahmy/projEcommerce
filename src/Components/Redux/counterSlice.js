import { createSlice } from "@reduxjs/toolkit";

let initialState ={
  count: 0,
  cartItems: [], // قائمة المنتجات في السلة
  productToDelete: null, // معلومات المنتج الذي سيتم حذفه
}

let counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    hyzwed: (state) => {
      state.count += 1;
    },
    addToCart: (state, action) => {
      const product = action.payload; // المنتج الذي سيتم إضافته إلى السلة
      // action.payload بيجبلي معلومات المنتج اللي ضفته في السله كلها
      // console.log(product)
      state.cartItems.push(product);
    },
    removeFromCart: (state, action) => {
      const indexToRemove = action.payload; // هنا نستخدم payload 
    //  لنحدد المنتج المراد حذفه
      state.cartItems.splice(indexToRemove, 1); //  بحذف المنتج من القائمة
    },
    updateCartItemCount: (state) => {
      state.count = state.cartItems.length;
    },

  },
});

export let counterReducer = counterSlice.reducer;
export const { hyzwed, addToCart  ,removeFromCart , updateCartItemCount} = counterSlice.actions;
export const setProductToDelete = (state, action) => {
  state.productToDelete = action.payload; // تعيين معلومات المنتج الذي سيتم حذفه
};