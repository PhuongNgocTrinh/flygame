import React from "react";
import { Link } from "react-router-dom";
import { ItemRow } from "../../../css/cssHome";

const ListItemRow = ({ products }) => {
  console.log(products);
  return (
    <ItemRow className="row">
      {" "}
      <div className="col-4 ">
        <h5>New Releases</h5>
        {products.listItems1?.map((item, index) => {
          return (
            <>
              <Link to={`infoGame/${item._id}`} className="rowItem" key={index}>
                <img src={item.img} />
                <div>
                  {" "}
                  <h6>{item.name}</h6>
                </div>
              </Link>
            </>
          );
        })}
      </div>
      <div className="col-4 col4-1">
        <h5>Top Player Rated</h5>

        {products.listItems2?.map((item, index) => {
          return (
            <>
              <Link to={`infoGame/${item._id}`} className="rowItem" key={index}>
                <img src={item.img} />

                <div>
                  {" "}
                  <h6>{item.name}</h6>
                </div>
              </Link>
            </>
          );
        })}
      </div>
      <div className="col-4 col4-1">
        <h5>Coming Soon</h5>

        {products.listItems3?.map((item, index) => {
          return (
            <>
              <Link to={`infoGame/${item._id}`} className="rowItem" key={index}>
                <img src={item.img} />

                <div>
                  <h6>{item.name}</h6>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </ItemRow>
  );
};

export default ListItemRow;
