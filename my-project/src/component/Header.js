import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import React, { useState, useRef, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../AppCss/App.css";
import Headroom from "../../src/index";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import {
  DflexAll,
  Img,
  Logo,
  ListMenu,
  Img2,
  Animate,
  RotateInDiv,
  RotateOutDiv,
} from "../css/cssComponent";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CSSTransitionGroup } from "react-transition-group";
import "animate.css/animate.min.css";
import { useSelector } from "react-redux";
import {
  getAuth,
  signOut,
  GoogleAuthProvider,
  getRedirectResult,
} from "firebase/auth";
const Header = () => {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const { cart } = useSelector((state) => state.carts);
  const { current } = useSelector((state) => state.products);
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose2 = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    const auth = getAuth();

    signOut(auth)
      .then(() => {
        console.log("logout");
      })
      .catch((error) => {
        // An error happened.
      });
    window.location.reload();
  };
  // handle scroll event
  const elemenScroll = useRef();
  var scrollableElement = document.body;
  useEffect(() => {
    scrollableElement.addEventListener("wheel", checkScrollDirection);

    function checkScrollDirection(event) {
      if (checkScrollDirectionIsUp(event)) {
        elemenScroll.current.style = "transition-delay:0s";

        elemenScroll.current.style.top = "0px";
      } else if (checkScrollDirectionIsUp == 0) {
        elemenScroll.current.style.top = "0px";
      } else {
        elemenScroll.current.style = "transition-delay:0.5s";

        elemenScroll.current.style.top = "-70px";
      }
    }
    function checkScrollDirectionIsUp(event) {
      if (event.wheelDelta) {
        return event.wheelDelta > 0;
      }
      return event.deltaY < 0;
    }
  });
  const src = "../images/avatar.png";
  const src2 = "../images/avatar2.png";

  return (
    <div className="main-body">
      <DflexAll
        ref={elemenScroll}
        id="sticky-header"
        className={`navbar${sticky.isSticky ? " sticky" : ""} nav`}
      >
        <Logo className="logo">
          <RotateInDiv style={{ width: "100%", position: "absolute" }}>
            {" "}
            <Img src={src2} />
          </RotateInDiv>
          <RotateOutDiv style={{ width: "100%", position: "absolute" }}>
            {" "}
            <Img src={src} />
          </RotateOutDiv>
        </Logo>
        <ListMenu className="list-menu">
          <Link to="/" className="items-menu">
            Home
          </Link>

          <Link to="listItem" className="items-menu">
            Game
          </Link>

          <Link to="blogs" className="items-menu">
            Blogs
          </Link>

          <Link to="aboutus" className="items-menu">
            About Us
          </Link>

          <Link to="fqa" className="items-menu">
            FQA
          </Link>
        </ListMenu>

        <DflexAll className="user">
          {current.name ? (
            <div className="user-gg">
              <div>
                {auth && (
                  <div>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleMenu}
                      color="inherit"
                    >
                      <div>
                        <img src={current?.photoUrl} />
                        <div className="name-user-gg">{current?.name}</div>
                      </div>
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorEl)}
                      onClose={handleClose2}
                    >
                      {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
                      <MenuItem onClick={handleClose}>LogOut</MenuItem>
                    </Menu>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <Link to="login" className="login">
              <div>login</div>
            </Link>
          )}

          <div className="icon-search">
            {<SearchIcon className="icon-search-child" />}
          </div>
          <Link className="icon-cart" to="cart">
            {<ShoppingCartIcon />}
            <div className={cart.length === 0 ? "" : "count"}>
              <span>{cart.length === 0 ? "" : cart.length} </span>
            </div>
          </Link>
        </DflexAll>
      </DflexAll>
    </div>
  );
};
export default Header;
