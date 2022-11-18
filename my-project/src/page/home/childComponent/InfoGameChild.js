import React from "react";

const InfoGameChild = ({ data }) => {
  return (
    <div className="row">
      {data.features.map((item, index) => {
        return (
          <div style={{ marginBottom: "50px" }} key={index} className="col-6">
            <img
              className="img-features"
              style={{ width: "100%" }}
              src={item.imgF}
            />
            <h4 style={{ margin: "20px 0 10px 0" }}>{item.textMain}</h4>
            <p>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default InfoGameChild;
