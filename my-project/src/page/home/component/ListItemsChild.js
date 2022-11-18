import {
  BodyItem,
  Img,
  ItemsPadding,
  ImgHoverItem,
  DivNone,
} from "../../../css/cssHome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../../../node_modules/slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";

import { addToCart } from "../../../redux/slice/cartSlice";
import { useSnackbar } from "notistack";

const ListItemsChild = (props) => {
  const [addedCart, setaddedCart] = useState(false);
  const { items } = props;
  const { enqueueSnackbar } = useSnackbar();

  const dispatch = useDispatch();
  const theme = createTheme({
    palette: {
      white: {
        main: "#fff",
        contrastText: "#000c",
      },
    },
  });
  const handleClickVariant = (variant, items) => () => {
    dispatch(addToCart(items));
    setaddedCart(true);
    // console.log(addedCart);
    enqueueSnackbar(`Added "${items.name}" to the cart!`, { variant });
  };
  return (
    <>
      <Link to={`infoGame/${items._id}`}>
        <ItemsPadding>
          <ImgHoverItem src={items.imgItem} />

          <p>{items.name}</p>
        </ItemsPadding>
      </Link>
      <DivNone className="main-btn">
        <ThemeProvider theme={theme}>
          <Button
            color="white"
            style={{ marginRight: "2px" }}
            variant="contained"
            size="small"
          >
            buy
          </Button>
        </ThemeProvider>
        <ThemeProvider theme={theme}>
          <Button
            className="btn-addCart-main"
            onClick={handleClickVariant("success", items, setaddedCart)}
            color="white"
            style={{ marginLeft: "2px" }}
            size="small"
            variant="contained"
          >
            {addedCart ? (
              <Link className="a-addcart-main" to="cart">
                view cart
              </Link>
            ) : (
              "add to cart"
            )}
          </Button>
        </ThemeProvider>
      </DivNone>
    </>
  );
};

export default ListItemsChild;
