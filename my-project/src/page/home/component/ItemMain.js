import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick.css";
import { BodyItem } from "../../../css/cssHome";
import { getItemsCart } from "../../../redux/slice/producSlice";

import ListItemsChild from "./ListItemsChild";
const ItemMain = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItemsCart());
  }, []);
  const { itemsCart } = useSelector((state) => state.products);

  const settings = {
    className: "center",
    rows: 2,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,

    slidesToScroll: 6,
    initialSlide: 0,
    centerPadding: "100px",
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <BodyItem className="main-items">
      <div className="container">
        <h5>New releases</h5>
        <p>Great PS5 and PS4 games available now</p>

        <Slider className="slider" {...settings}>
          {itemsCart &&
            itemsCart.items.map((items, index) => {
              return (
                <div key={index} className="main-card">
                  <ListItemsChild items={items} />
                </div>
              );
            })}
        </Slider>
      </div>
    </BodyItem>
  );
};
export default ItemMain;
