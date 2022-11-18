import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Stack, Button } from "react-bootstrap";
import Slider from "react-slick";
import { ImgBlog, Pblog, H5blog } from "../../../css/cssHome";
import { Link } from "react-router-dom";

const BlogBody = (props) => {
  const { products } = props;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };
  return (
    <div className="blog-main">
      <h1> Blogs </h1>
      <Slider className="a" {...settings}>
        {products &&
          products.blogs.map((item, key) => {
            return (
              <Link to={`blogid/${item.id}`} key={key} className="blog-items">
                <ImgBlog src={item.img} />
                <H5blog>{item.title}</H5blog>
                <Pblog>{item.text}</Pblog>
              </Link>
            );
          })}
      </Slider>
    </div>
  );
};
export default BlogBody;
