import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/producSlice";
import cartsReducer from "./slice/cartSlice";
const store = configureStore({
  reducer: {
    products: productReducer,
    carts: cartsReducer,
  },
});
export default store;
