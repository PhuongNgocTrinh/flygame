import React, { Component } from "react";
import Slider from "react-slick";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import "animate.css/animate.min.css";
import {
  Title,
  Img,
  DisplayFlex,
  Prv,
  TitleBanerDow,
  SliderCrs,
  TitleBanner,
  Carousel,
} from "../../../css/cssHome";
import { LogoWow, FadeInUpDiv } from "../../../css/cssComponent";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../../node_modules/slick-carousel/slick/slick.css";
// import "../../node_modules/slick-carousel/slick/slick-theme.css";
import { baseUrl } from "./config";
import "../../../AppCss/App.css";
import TitleOfBanner from "../childComponent/TitleOfBanner";

export default function BanerCarousel({ products }) {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <SliderCrs src={`${baseUrl}/abstract0${i + 1}.png`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <Carousel>
      <Slider {...settings}>
        {products?.imgBaner?.map((item, index) => {
          return (
            <Prv key={index}>
              <SliderCrs className="img-child" src={baseUrl + item.img} />
              <TitleBanner className="title-text">
                <FadeInUpDiv>
                  <LogoWow className="animate__repeat-2" src={item.textImg} />
                </FadeInUpDiv>

                <TitleOfBanner data={item} />
              </TitleBanner>
            </Prv>
          );
        })}
      </Slider>
    </Carousel>
  );
}
