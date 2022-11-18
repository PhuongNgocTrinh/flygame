import HelpIcon from "@mui/icons-material/Help";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartItem, ChildCart1, ImgCart, MainCart } from "../../css/cssHome";
import { deleteCart } from "../../redux/slice/cartSlice";
import CheckOut from "../checkOut/CheckOut";
import ButtonCpn from "./component/ButtonCpn";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.carts);
  const [open, setOpen] = useState(false);
  return (
    <MainCart>
      <CheckOut open={open} setOpen={setOpen} cart={cart} />
      <div className="container">
        <h2 className="main-my-cart">
          My Cart{" "}
          {cart.length > 0 ? (
            <span className="count-item">({cart.length})</span>
          ) : (
            ""
          )}
        </h2>
        <div className="row">
          {cart.length > 0 ? (
            <div className="col-8">
              {cart.map((a, b) => {
                return (
                  <ChildCart1 key={b} className="child-cart-1">
                    <div className="child-cart">
                      <CartItem className="cart-item">
                        <Link to={`infoGame/${a._id}`} className="img-cart ">
                          <ImgCart src={a.imgItem} />
                        </Link>
                        <div className="main-Up-Dow">
                          <div className="info-up">
                            <div className="main-gameBaEdi">
                              {a.edit ? (
                                <span className="span-GE">
                                  <div className="gameBaEdi">
                                    <div>{a.edit}</div>
                                  </div>
                                </span>
                              ) : (
                                ""
                              )}

                              <span>
                                {a.base ? (
                                  <div className="gameBaEdi">
                                    <div>{a.base}</div>
                                  </div>
                                ) : (
                                  ""
                                )}
                              </span>
                            </div>
                            <Link
                              className="name-cart"
                              to={`infoGame/${a._id}`}
                            >
                              <h5>{a.name}</h5>
                            </Link>
                            <p className="p-Available">Available {a.year} </p>
                            <div className="Self">
                              Self-Refundable
                              <Tooltip
                                title="Self-Refundable"
                                placement="top-start"
                              >
                                <Link className="icon-self" to="self">
                                  <HelpIcon
                                    sx={{ color: "#fff", fontSize: 15 }}
                                  />
                                </Link>
                              </Tooltip>
                            </div>
                          </div>
                          <div className="info-dow">
                            <span className="info-icon">
                              {" "}
                              {a.window ? (
                                <span className="span-icon-up">
                                  {" "}
                                  <i class={"fa-brands " + `${a.window}`}></i>
                                </span>
                              ) : (
                                " "
                              )}
                            </span>
                            <span className="info-icon">
                              {a.mac ? (
                                <i className={"fa-brands " + `${a.mac}`}></i>
                              ) : (
                                " "
                              )}
                            </span>

                            <i class="fa-brands "></i>
                          </div>
                        </div>
                      </CartItem>
                      <div className="price-btn">
                        <div>{a.price}$</div>
                        <Button
                          className="remove-cart"
                          onClick={() => {
                            dispatch(deleteCart(a));
                          }}
                          variant="contained"
                          disableElevation
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </ChildCart1>
                );
              })}
            </div>
          ) : (
            <div className="main-nothing">
              <div className="css-1xn3edc">
                <span className="css-14aopxi" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg css-uwwqev"
                    viewBox="0 0 45 52"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path
                        d="M4.058 0C1.094 0 0 1.098 0 4.075v35.922c0 .338.013.65.043.94.068.65-.043 1.934 2.285 2.96 1.553.683 7.62 3.208 18.203 7.573 1.024.428 1.313.529 2.081.529.685.013 1.137-.099 2.072-.53 10.59-4.227 16.66-6.752 18.213-7.573 2.327-1.23 2.097-3.561 2.097-3.899V4.075C44.994 1.098 44.13 0 41.166 0H4.058z"
                        fill="currentColor"
                      ></path>
                      <path
                        stroke="#FFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 18l4.91 2.545-2.455 4M25.544 28.705c-1.056-.131-1.806-.14-2.25-.025-.444.115-1.209.514-2.294 1.197M29.09 21.727L25 19.5l2.045-3.5"
                      ></path>
                    </g>
                  </svg>
                </span>
              </div>
              <h1 className="h1-nothing"> Nothing...</h1>
              <span className="css-119zqif">
                <Link to="/" className="css-8dq9ld" role="link" href="/en-US/">
                  <span>Shop for Games &amp; Apps</span>
                </Link>
              </span>
            </div>
          )}

          {cart.length > 0 ? (
            <div className="col-4">
              <div>
                <h5>Games and Apps Summary</h5>
                <div className="main-total">
                  <div className="d-flex price-cart">
                    <div> price</div>
                    <div>
                      {cart.length > 0
                        ? cart.reduce((a, b) => {
                            return a + b.price;
                          }, 0)
                        : undefined}
                      <span style={{ marginLeft: "10px" }}>$</span>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div>Taxes</div>
                    <div className="Calculated">Calculated at Checkout</div>
                  </div>
                  <div className="Subtotal d-flex">
                    <div>Subtotal</div>
                    <h5>
                      {cart.length > 0
                        ? cart.reduce((a, b) => {
                            return a + b.price;
                          }, 0)
                        : undefined}
                      <span style={{ marginLeft: "10px" }}>$</span>
                    </h5>
                  </div>
                  <ButtonCpn setOpen={setOpen} />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </MainCart>
  );
};
export default Cart;
