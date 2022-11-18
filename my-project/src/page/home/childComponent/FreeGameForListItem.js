import React from "react";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { ContainerFreeGame } from "../../../css/cssHome";
const FreeGameForListItem = () => {
  const { products } = useSelector((state) => state.products);
  if (products === 0)
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  return (
    <ContainerFreeGame className="container">
      <div style={{ background: " #202020" }} className="row-freegame">
        <div className="title-free">
          <p>
            Epic Games Store gives you a free game every week. Come back often
            for the exclusive offers. Download a free game to play or join a
            free-to-play game community today.
          </p>
        </div>

        <div className="box-free">
          <h3>
            <i style={{ marginRight: "10px" }} className="fa-solid fa-gift"></i>
            Free Game
          </h3>
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

export default FreeGameForListItem;
