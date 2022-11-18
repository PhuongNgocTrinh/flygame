import { createSlice } from "@reduxjs/toolkit";
import MuiAlert from "@mui/material/Alert";
import * as React from "react";
import { Stack } from "react-bootstrap";
const initialState = {
  cart: [],
  load: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state = initialState, action) => {
      const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });
      const itemFind = state.cart.find((p) => p._id === action.payload._id);

      if (!itemFind) {
        return { cart: [...state.cart, action.payload] };
      } else return state;
    },
    deleteCart: (state = initialState, action) => {
      const newListCart = state.cart;
      const objIndex = newListCart.findIndex(
        (obj) => obj._id === action.payload._id
      );

      newListCart.splice(objIndex, 1);

      //   return { cart: [...newListCart] };
    },
  },
});

export const { addToCart, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
