import React from "react";
import Slider from "react-slick";
import NoFigure from "./NoFigure";
const Figure = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "350px",
  };
  return (
    <div className="figure-main">
      <h2> Meet the characters of {data.nameGame} </h2>
      {data.figure ? (
        <Slider className="a" {...settings}>
          {data.figure?.map((item, key) => {
            return (
              <div key={key}>
                <img style={{ width: "100%" }} src={item.img} />
                <div className="info-avt">
                  <h4 style={{ textAlign: "center", transition: "0.5" }}>
                    {item.name}
                  </h4>
                  {item.info && (
                    <p style={{ textAlign: "center" }}>{item.info}</p>
                  )}
                </div>
              </div>
            );
          })}
        </Slider>
      ) : (
        <div>
          <NoFigure data={data.noFigure} />
        </div>
      )}
    </div>
  );
};

export default Figure;
