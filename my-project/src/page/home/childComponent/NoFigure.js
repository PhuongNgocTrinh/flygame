import React from "react";
import Slider from "react-slick";
import { ImgNofigure, ImgBlog } from "../../../css/cssHome";
const NoFigure = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="no-figure">
      <Slider className="a" {...settings}>
        {data &&
          data.map((item, key) => {
            return (
              <div key={key} className="blog-items">
                <ImgBlog src={item.img} />
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default NoFigure;
