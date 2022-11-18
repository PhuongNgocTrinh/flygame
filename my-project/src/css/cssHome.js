import { height } from "@mui/system";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";
export const Img = styled.img`
  width: 100%;
  &.img-childBaner {
    width: 40%;
    border-radius: 20px;
    position: absolute;
    bottom: -40%;
    right: 10%;
  }
  &.caretory-img {
    border-radius: 20px;
  }
`;
export const ImgBlog = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 20px;
`;

export const Title = styled.div``;
export const TitleBanner = styled.div`
  position: absolute;
  bottom: 20%;
  left: 10%;
  width: 500px;
  color: #fff;
  &.title-text .out-login {
    border: 1px solid transparent;
    width: 30%;
    text-align: center;
  }
  &.title-text .login:hover {
    /* border: 1px solid #2871c6; */
  }
  &.title-text div a div {
    background-color: #2871c6;
    padding: 6px 16px;
  }
  &.user {
  }
  .example-enter {
    opacity: 0.01;
  }

  .example-enter.example-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }

  .example-leave {
    opacity: 1;
  }

  .example-leave.example-leave-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }
`;
export const Prv = styled.div`
  position: relative;
  z-index: 10;
`;
export const TitleBanerDow = styled.div`
  h6 {
    margin: 20px 0;
  }
`;
export const DisplayFlex = styled.div`
  width: 40%;
  margin-left: 50px;
  padding: 57px 21px;
  display: flex;
  justify-content: center;
  margin: 50px 0;
`;
// baner carousel
export const Carousel = styled.div`
  /* margin-top: 70px; */
  padding-top: 70px;
  padding-bottom: 150px;
  .slick-slider .slick-prev,
  .slick-slider .slick-next {
    top: 51% !important;
  }
  .slick-slider .slick-prev {
    left: 5% !important;
  }
  .slick-slider .slick-prev::before {
    font-size: 40px !important;
  }
  .slick-slider .slick-next {
    right: 6% !important;
  }
  .slick-slider .slick-next::before {
    font-size: 40px !important;
  }
  .slick-slider .slick-dots li:not(.slick-active) {
    opacity: 0.5;
  }
  .slick-slider .slick-dots .slick-active {
    border: 2px solid #2871c6;
    transform: translateY(-15px);
    box-shadow: rgba(0, 0, 0, 0.45) 0px 20px 10px 0px;
  }
`;

export const SliderCrs = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  &.img-child {
    border-radius: 0;
  }
`;

export const Extraordina = styled.h4`
  text-align: center;
  margin-bottom: 20px;
`;
export const BodyItem = styled.div`
  width: 100%;
  height: 750px;
  background-color: #000;
  padding-top: 50px;
  div h5,
  div p {
    color: #fff;
  }
  &.container .slick-slider .slick-list .slick-track .slick-cloned div {
    margin-bottom: 20px;
  }
  a {
    text-decoration: none;
  }
`;
export const ItemsPadding = styled.div`
  padding: 10px;
  height: 270px;
  /* margin-bottom: 30px; */
  overflow: hidden;
  object-fit: cover;
  p {
    color: #fff;
    margin-top: 8px;
  }
  img {
    border-radius: 15px;
  }
`;

export const HeightItem = styled.div`
  height: 270px;
`;
//vvideo
export const Video = styled.div`
  width: 100%;
  video {
    width: 100%;
  }
`;
export const MainImg = styled.div`
  position: relative;
  &img {
    width: 100%;
  }
`;
export const ImgZ101 = styled.div`
  position: absolute;

  width: 100%;
  z-index: 100;
  top: 0;
  left: 0;
`;
export const ImgZ100 = styled.div`
  /* position: absolute; */

  width: 100%;
  z-index: 100;
  top: 0;
  left: 0;
`;
export const ImgZ99 = styled.div`
  position: absolute;

  width: 100%;
  z-index: 99;
  bottom: 0;
  left: 0;
  object-fit: cover;
  overflow: hidden;
`;
export const ImgZ98 = styled.div`
  position: absolute;

  width: 100%;
  z-index: 98;
  top: 0;
  left: 0;
`;
export const MarginBT = styled.div`
  margin: 50px 0;
`;
export const AnimateTest = styled.div`
  animation: "fadeInUp";
  animation-duration: 8s;

  transition: 0.6s;
`;
export const AnimatePlay = styled.div`
  animation: "fadeIn";
  animation-duration: 8s;

  transition: 0.6s;
`;
export const AnimateTitle = styled.h1`
  animation: "slideInDown";
  animation-duration: 5s;

  transition: 0.6s;
`;
export const Margincategory = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  .a-seeMore {
    text-align: center;
    margin-top: 50px;
  }
  .a-child-seeMore {
    text-decoration: none;
    padding: 4px;
    /* border-radius: 6px; */
    color: #000c;
    :hover {
      border-bottom: 1px solid #2871c6;
      color: #2871c6;
    }
  }
`;

//blogbody
export const H5blog = styled.h5`
  text-decoration: none;
  margin: 10px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;
export const Pblog = styled.p`
  text-decoration: none;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;
export const Pcategory = styled.div`
  margin-top: 10px;
  text-decoration: none;
  list-style: none;
`;
export const PrvBanerInfo = styled.div`
  position: relative;
`;
export const PbsBanerInfo = styled.div`
  position: absolute;
  top: 20%;
  left: 5%;
  width: 50%;
  color: #fff;
  .btn-addToCart:hover {
    background: rgba(208, 225, 225, 40%);
    display: flex;
    align-items: center;
  }
  .btn-addToCart:hover .linkToCart {
    border-bottom: 1px solid #fff;
  }
  .main-btn-infoGame {
    display: flex;
    flex-direction: column;
  }
  .addCart {
    margin-top: 20px;
  }

  .linkToCart {
    text-decoration: none;
    color: #fff;
  }

  .row .col-6,
  h5 {
    color: #fff;
  }
  .year-game {
    margin-top: 20px;
  }
  .onlinePlayer {
    margin-top: 20px;
    width: 50%;
    display: flex;
    justify-content: space-between;
  }
`;

export const Ps4Ps5 = styled.span`
  border: 0.5px solid #fff;
  padding: 4px 10px;
  margin-right: 15px;
`;
export const ImgNofigure = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 20px;
`;
export const Warring = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  background: black;
  color: #fff;
  .warring {
    width: 60%;
    margin: auto;
    text-align: center;
    p {
      font-size: 0.75rem;
    }
  }
`;
export const MainImgTab = styled.div`
  width: 100%;
  border-radius: 20px;
`;
export const DivNone = styled.div`
  margin-top: 0px !important;
  visibility: hidden;
  opacity: 0;
`;
export const ImgHoverItem = styled.img`
  width: 100%;

  transition: 0.2s;
`;

//cart
export const MainCart = styled.div`
  padding: 50px 130px;
  padding-top: 120px;
  background: rgb(18, 18, 18);
  color: #fff;
  font-family: Brutal, sans-serif;
  .cart-item {
    display: flex;
  }
  .child-cart {
    display: flex;
    justify-content: space-between;
    /* align-items: flex-end; */
    padding: 20px 20px;
    background-color: rgb(32, 32, 32);
    border-radius: 8px;
  }
  .space {
    border-bottom: 1px solid #000c;
    width: 70%;
    margin-bottom: 30px;
  }

  .d-flex {
    display: flex;
    justify-content: space-between;
  }
  .child-cart-1 {
    margin-bottom: 20px;
    color: #fff;
  }
  .price-btn {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
  }
  .main-total {
    margin-top: 30px;
    padding-right: 10px;

    padding-left: 10px;
  }
  .Subtotal {
    margin-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 20px;
  }
  .h1-nothing {
    text-align: center;
  }
  .main-nothing {
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    margin: 100px 0;
  }
  .price-cart {
    /* margin-bottom: 20px; */
  }
  .Calculated {
    opacity: 70%;
    font-size: 14px;
  }
  .MuiBox-root .css-1tfqlfq {
    width: 100%;
  }
  .main-my-cart {
    margin-bottom: 50px;
  }
  .count-item {
    font-size: 18px;
  }
  .main-checkout {
    top: 0;
    left: 0;
    z-index: 1000;
    position: fixed;
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    color: black;
    padding: 0 50px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    background: rgb(225, 225, 225, 75%);
  }
  .body-checkout {
    width: 80%;
    background: #fff;
    border: 0.5px solid gray;
  }
  .col4-relative {
    position: relative;
    background: #f2f2f2;
    /* padding: 20px; */
    height: 100vh;
    padding-top: 30px;
    padding-left: 0;
  }
  .payment {
    /* margin-left: -10px; */
    padding: 10px;
    background: rgba(20, 20, 20, 0.04);
  }
  .close-checkout {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    width: 94%;
    padding-left: 10px;
    top: 25px;
    button {
      outline: none;
      border: none;
      background: none;
      color: black;
    }
  }
  .title-checkout {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid gray;
    padding-top: 26px;

    padding-bottom: 16px;

    h5 {
      font-weight: 500;
      font-size: 14px;
    }
  }
  .col-4 {
    padding-right: 0;
  }

  .img-checkout {
    margin-right: 10px;
    width: 35%;
    margin-right: 10px;
    height: 100%;
    /* overflow: hidden; */
    object-fit: cover;
    border-radius: 15px;
  }
  .item-scroll {
    max-height: 520px;
    object-fit: cover;
    overflow: hidden;
    overflow-y: scroll;
    /* background: #1f1f1f; */
    margin-top: 10px;
    /* color: #fff; */
    z-index: 99;
  }
  .btn-checkout {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 20px;
    background: #f2f2f2;
    left: 0;
    box-shadow: 0 -4px 4px rgb(0 0 0 / 10%);

    button {
      width: 100%;
      height: 60px;
    }
  }
  .d-flex {
    display: flex;
    justify-content: space-between;
  }
  .price-checkout {
    border-bottom: 1px solid gray;
    padding-bottom: 20px;
    color: #141412b8;
    margin-bottom: 20px;
  }
  .total-checkout {
  }
  .css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root {
    flex-direction: row-reverse;
  }
  .css-1elwnq4-MuiPaper-root-MuiAccordion-root,
  .css-yw020d-MuiAccordionSummary-expandIconWrapper {
    background: #f2f2f2 !important;
    color: black !important;
    border: none !important;
    border-top: none !important;
  }
  .css-1elwnq4-MuiPaper-root-MuiAccordion-root {
    box-shadow: none;
  }
  .ss-1elwnq4-MuiPaper-root-MuiAccordion-root {
  }
  .main-atm {
    margin-top: 20px;
    .css-pwcg7p-MuiCollapse-root {
    }
  }
  .css-1elwnq4-MuiPaper-root-MuiAccordion-root:before {
    background-color: #fff !important;
  }
  .list-cart {
    margin-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    height: 180px;

    .name-price {
      .h6-price {
        color: #141412b8;
      }
    }
    .img-titleItem {
      display: flex;
      align-items: center;
      height: 100%;
    }
  }
  .list-cart div {
  }
  .css-o4b71y-MuiAccordionSummary-content {
    margin-left: 20px !important;
  }
  .payment-bank {
    display: flex;
    justify-content: space-between;
  }
  .input-sale {
    position: relative;
  }
  .input-sale input {
    width: 100%;
    padding: 10px;
    ::placeholder {
      font-size: 12px;
    }
  }
  .img-cartbank {
    background-size: contain !important;
    margin: 0 3px;
    width: 33px;
    height: 21px;
    border-radius: 2px;
  }
  .all-img-cartbank {
    display: flex;
  }
  .info-credit {
    margin-top: 10px;
  }
  .p-credit {
    margin: 10px 0;
    display: inline-block;
    font-size: 12px;
    color: rgba(20, 20, 20, 0.72);
  }
`;
export const ImgCart = styled.img`
  width: 200px;
  margin-right: 20px;
  border-radius: 10px;
`;

export const CartItem = styled.div`
  .name-cart {
    color: rgb(245, 245, 245);
    font-size: 18px;
    text-decoration: none;
  }
  .name-cart:hover {
    text-decoration: underline 1px;
    color: rgb(245, 245, 245);
  }
  .img-cart {
    opacity: 85%;
    transition: 0.2s;
  }
  .img-cart:hover {
    opacity: 100%;
  }
`;
export const ChildCart1 = styled.div`
  .remove-cart {
    padding: 0px;
    border: none;
    font: inherit;
    color: inherit;
    background-color: none;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    pointer-events: all;
    position: relative;
    border-radius: 1px;
    outline: none;
    border: none;
    background: none;
    border-bottom: 1px solid rgba(245, 245, 245, 0.6);
    color: rgba(245, 245, 245, 0.6);
    text-transform: none;
  }
  .remove-cart {
  }
  .remove-cart:hover {
    color: rgb(245, 245, 245);
    background: none;
  }
  .gameBaEdi {
    display: inline-flex;
    flex-flow: row nowrap;
    -webkit-box-align: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.1);
    color: rgb(245, 245, 245);
    padding: 5px 10px;
    position: relative;
    border-radius: 4px;
  }
  .main-gameBaEdi {
    transition: color 125ms ease-in-out 0s;
    color: rgb(245, 245, 245);
    font-size: 9px;
    line-height: 15px;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 10px;
  }
  .span-GE {
    margin-right: 10px;
  }
  .main-Up-Dow {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .span-icon-up {
    margin-right: 10px;
  }
  .info-icon {
    opacity: 80%;
    font-size: 12px;
  }
  .p-Available {
    font-size: 12px;
    opacity: 60%;
  }
  .Self {
    margin-top: 20px;
    color: #fff;
    font-size: 14px;
  }
  .icon-self {
    margin-left: 10px;
    background: none;
    opacity: 60%;
  }
`;
export const MainSelf = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  margin: auto;
  .child-self {
    margin-top: 70px;
  }
  .title-self {
    margin-bottom: 50px;
  }
`;

export const ContainerFreeGame = styled.div`
  .row-freegame {
    padding: 50px;
    background: #000c;
    color: #fff;
    border-radius: 10px;
  }
  .div-img-freegame {
    display: flex;
    justify-content: center;
  }
  .img-freegame {
    width: 100%;
    width: 230px;
    height: 310px;
    border-radius: 10px;
    opacity: 70%;
    transition: 0.4s;
  }
  .row-freegame a {
    text-decoration: none;
    color: #fff;
  }
  .row-freegame a:hover .img-freegame {
    opacity: 100%;
  }
  .main-text {
    padding-left: 24px;
    font-size: 11px;
    margin-top: 10px;
  }
  .name-freegame {
    margin-bottom: 6px;
    font-size: 16px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 80%;
  }
  h3 {
    /* margin-bottom: 20px; */
  }
  .time-free {
    opacity: 60%;
  }
  .box-free {
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-bottom: 20px;
    padding: 0 24px;
  }
  .seemore {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #fff;
    padding: 10px 10px;
    border-radius: 10px;
    :hover {
      border: 1px solid #2871c6;
      color: #2871c6;
    }
    :hover a {
      color: #2871c6;
    }
  }
  .seemore a {
    margin: auto;
  }
  .title-free {
    width: 50%;
    text-align: center;
    display: flex;
    justify-content: center;
    margin: auto;
  }
`;
export const MainListItem = styled.div`
  /* margin-top: 70px; */
  padding-top: 70px;
  background-color: black;
  .img-listitem {
    width: 100%;
    border-radius: 10px;
  }
  .main-content-pagination {
    height: 290px;
    text-decoration: none;
    margin-top: 20px;
    color: #fff;
  }
  .name-pani {
    margin-top: 10px;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .filter {
    color: #fff;
    margin-top: 20px;
  }
  .btn-filter-pani {
    position: absolute;
    right: 6px;
    top: 14px;
    margin-top: 0px;
  }
  .box-filter {
    width: 100%;
    /* background-color: #fff; */
    /* padding: 12px; */
  }
  li {
    margin-bottom: 10px;
  }
  .btn-clear {
    width: 30px;
    height: 30px;
    padding: 10px;
    position: absolute;
    top: 25%;
    right: 5%;
    outline: none;
    border: 1px solid transparent;
    background: none;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
      border: 1px solid #fff;
      border-radius: 100%;
    }
  }
`;
export const PanigationMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .btn-panigation {
    margin-right: 10px;
  }
`;
export const ItemsFilter = styled.div`
  max-height: 435px;
  object-fit: cover;
  overflow: hidden;
  overflow-y: scroll;
  background: #1f1f1f;
  margin-top: 10px;
  color: #fff;

  ul {
    padding: 0;
  }
  a {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #fff;
    text-decoration: none;
  }
  .img-filter {
    width: 20%;
    margin-right: 10px;
  }
  li {
    padding: 10px 12px;
    margin-bottom: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    :hover {
      background-color: #fff;
      color: #000c;
    }
  }
`;
export const CommentInfoGame = styled.div`
  background: #000c00;
  color: #fff;
  .input-info {
    width: 30%;
  }
  .title-comment {
    display: flex;
    align-items: center;
  }
  .time-comment {
    font-size: 10px;
  }
  .time-comment h6 {
    margin-bottom: 0;
  }
  .main-comment {
    width: 50%;
    padding: 20px;
    border: 1px solid #fff;
    margin-bottom: 20px;
  }
  .up-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .link-grey {
    margin-right: 10px;
  }
`;

export const name12 = styled.div``;
export const CheckOut = styled.div``;
export const ItemRow = styled.div`
  margin-top: 50px;
  color: #fff;
  .col4-1 {
    border-left: 1px solid gray;
    padding-left: 50px;
    padding-right: 30px;
  }
  .col-4 h5 {
    margin-bottom: 20px;
  }
  img {
    width: 85px;
    height: 135px;
    border-radius: 10px;
  }
  .rowItem {
    display: flex;
    margin-bottom: 20px;
    padding: 20px;

    text-align: center;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: start;
      h6 {
        margin-left: 20px;
      }
    }
    :hover {
      background: gray;
      border-radius: 15px;
    }
  }
`;
