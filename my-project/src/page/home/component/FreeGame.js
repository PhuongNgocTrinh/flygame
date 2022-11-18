import React from "react";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { ContainerFreeGame } from "../../../css/cssHome";
import { Link } from "react-router-dom";
const FreeGame = () => {
  const { products } = useSelector((state) => state.products);
  if (products === 0)
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  return (
    <ContainerFreeGame className="container">
      <div className="row-freegame">
        {" "}
        <div className="box-free">
          <h3>
            <i style={{ marginRight: "10px" }} className="fa-solid fa-gift"></i>
            Free Game
          </h3>
          <div className="seemore">
            <Link to="listItem">see more</Link>
          </div>
        </div>
        <div className="row ">
          {products &&
            products.gamefree.map((item, index) => {
              return (
                <Link to={`infoGame/${item.id}`} className="col-3" key={index}>
                  <div className="div-img-freegame">
                    <img className="img-freegame" src={item.img} />
                  </div>
                  <div className="main-text">
                    <div className="name-freegame">{item.name}</div>
                    <div className="time-free">{item.freenow}</div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </ContainerFreeGame>
  );
};

export default FreeGame;
