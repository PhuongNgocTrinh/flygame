import { useSelector, useDispatch } from "react-redux";
import { getById } from "../../../redux/slice/producSlice";
import { DflexAll, FadeInUpDiv, FadeInUpDiv2 } from "../../../css/cssComponent";
import {
  PrvBanerInfo,
  PbsBanerInfo,
  Ps4Ps5,
  AnimatePlay,
  AnimateTitle,
  Warring,
} from "../../../css/cssHome";

import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import PersonIcon from "@mui/icons-material/Person";
import { CSSTransitionGroup } from "react-transition-group";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { addToCart } from "../../../redux/slice/cartSlice";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Rating } from "@mui/material";
import RatingCpn from "./RatingCpn";
import InfoGameChild from "./InfoGameChild";

import FQAgame from "./FQAgame";
import Para from "./\bPara";
import Figure from "./Figure";
const InfoGame = () => {
  const [addedCart, setAddedCart] = useState(false);
  const [addedCartIcon, setAddedCartIcon] = useState(
    <ControlPointIcon sx={{ fontSize: 18 }} />
  );

  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getById(params.id));
  }, [params]);

  const { listItemID } = useSelector((state) => state.products);

  if (listItemID === 0) return <h1>loading...id</h1>;

  return (
    <>
      {listItemID &&
        listItemID.map((itemForId, index) => {
          return (
            <div style={{ paddingTop: "70px" }} key={index}>
              <PrvBanerInfo className="title-infogame">
                <div className="">
                  <div className="bgr-video"></div>

                  {itemForId.detail.video ? (
                    <video
                      autoPlay={true}
                      loop={true}
                      muted={true}
                      width={"100%"}
                      preload={"auto"}
                      src={itemForId.detail?.video}
                    ></video>
                  ) : (
                    <img
                      style={{ width: "100%" }}
                      src={itemForId.detail.replaceVideo}
                    />
                  )}
                  <img
                    style={{ width: "100%", position: "absolute" }}
                    src={itemForId.detail?.info}
                  />
                </div>
                <PbsBanerInfo>
                  <FadeInUpDiv>
                    <h1>{itemForId.detail?.title}</h1>
                  </FadeInUpDiv>
                  <div>
                    <p>Sony Interactive Entertainment</p>
                    <Ps4Ps5>ps4</Ps4Ps5>
                    <Ps4Ps5>ps5</Ps4Ps5>
                  </div>
                  <div>
                    <p className="year-game">{itemForId.year}</p>
                    <div className="main-btn-infoGame">
                      <DflexAll className="user">
                        <Link className="login">
                          <div style={{ padding: "10px 40px" }}>Buy Games</div>
                        </Link>
                      </DflexAll>
                      <div className="addCart">
                        <Stack direction="row" spacing={6}>
                          <Button
                            onClick={() => {
                              dispatch(addToCart(itemForId));
                              setAddedCart(true);
                              setAddedCartIcon(
                                <CheckCircleOutlineIcon sx={{ fontSize: 18 }} />
                              );
                            }}
                            className="btn-addToCart"
                            sx={{ color: "#fff", fontSize: 14 }}
                          >
                            <div style={{ marginBottom: "2px" }}>
                              {addedCartIcon}
                            </div>

                            <div style={{ marginLeft: "10px" }}>
                              {" "}
                              {addedCart ? (
                                <Link className="linkToCart" to="cart">
                                  view cart
                                </Link>
                              ) : (
                                "add to cart"
                              )}
                            </div>
                          </Button>
                        </Stack>
                      </div>
                    </div>
                    <div className="onlinePlayer">
                      <FadeInUpDiv2>
                        <div className="fadeIn">
                          <span
                            className="animate__repeat-2"
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <SportsEsportsIcon />
                            {itemForId.ps}
                          </span>
                        </div>
                      </FadeInUpDiv2>
                      <FadeInUpDiv2>
                        <div>
                          <span
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <span>
                              <PersonIcon />
                            </span>
                            <span> {itemForId.player}</span>
                          </span>
                        </div>
                      </FadeInUpDiv2>
                    </div>
                  </div>
                </PbsBanerInfo>
              </PrvBanerInfo>

              <PrvBanerInfo className="main-baner-infogame">
                <div
                  style={{ width: "100%", opacity: "calc(3*.1)" }}
                  className="baner-infogame"
                >
                  <img style={{ width: "100%" }} src={itemForId.detail.baner} />
                </div>
                <PbsBanerInfo style={{ width: "100%" }} className="container">
                  <div className="row">
                    <div className="col-6">
                      <h5>overview</h5>
                      <h3 style={{ width: "90%" }}>
                        Join Aloy as she braves the {itemForId.name} - a
                        majestic but dangerous frontier that conceals mysterious
                        new threats.
                      </h3>
                    </div>
                    <div className="col-6">
                      <p style={{ marginBottom: "50px" }}>
                        Explore distant lands, fight bigger and more
                        awe-inspiring machines, and encounter astonishing new
                        tribes as you return to the far-future, post-apocalyptic
                        world of
                        {itemForId.name}.
                      </p>
                      <p style={{ marginBottom: "50px" }}>
                        The land is dying. Vicious storms and an unstoppable
                        blight ravage the scattered remnants of humanity, while
                        fearsome new machines prowl their borders. Life on Earth
                        is hurtling towards another extinction, and no one knows
                        why.
                      </p>
                      <p>
                        It's up to Aloy to uncover the secrets behind these
                        threats and restore order and balance to the world.
                        Along the way, she must reunite with old friends, forge
                        alliances with warring new factions and unravel the
                        legacy of the ancient past – all the while trying to
                        stay one step ahead of a seemingly undefeatable new
                        enemy.
                      </p>
                    </div>
                  </div>
                </PbsBanerInfo>
              </PrvBanerInfo>
              <div className="container">
                <div style={{ textAlign: "center", margin: "50px 0" }}>
                  <h1>{itemForId.name} key features</h1>
                  <p>An epic action RPG adventure.</p>
                </div>
                <div className="features">
                  <InfoGameChild data={itemForId.detail} />
                </div>
              </div>
              <div className="main-info">
                <Figure data={itemForId.detail} />
              </div>

              <FQAgame data={itemForId} />
              <RatingCpn />
              <Warring>
                <div className="warring">
                  <Para />
                  <img
                    style={{
                      width: "100px",
                      height: "100px",
                      marginBottom: "10px",
                    }}
                    src={itemForId.imgItem}
                  />
                  <h6>{itemForId.name}</h6>
                  <p>{itemForId.warring}</p>
                  <p>
                    {itemForId.name}™ & ©BANDAI NAMCO Entertainment Inc. / ©2022
                    FromSoftware, Inc.
                  </p>
                </div>
                <div></div>
              </Warring>
            </div>
          );
        })}
    </>
  );
};
export default InfoGame;
