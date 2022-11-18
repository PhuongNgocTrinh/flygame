import styled, { keyframes } from "styled-components";
import {
  rotateIn,
  rotateOut,
  rotateInDownLeft,
  rotateInDownRight,
  fadeInUp,
} from "react-animations";

export const DflexAll = styled.div`
  &.nav {
    padding: 0 60px;
    height: 70px;
    position: fixed;
    width: 100%;
    z-index: 1000;
    background-color: rgba(248, 249, 250);
    color: #fff;
    transition: 0.4s;
  }
  &.user {
    display: flex;
  }
  .navbar .user .login {
    margin-right: 20px;
  }
  &.user .icon-search {
    /* margin-left: 20px; */
    margin-right: 20px;
  }
  &.user .icon-search .icon-search-child {
    font-size: 30px;
    color: black;
  }
  .icon-cart {
    color: black;
    position: relative;
  }
  .icon-cart .count {
    position: absolute;
    top: -10px;
    right: -8px;
    color: #fff;
    font-size: 13px;

    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon-cart .count span {
    background: #2871c6;

    border-radius: 50%;
    width: 20px;
    height: 20px;
  }
  &.user .login {
    text-decoration: none;
    color: #fff;
    padding: 2px;
    border: 1px solid transparent;
    border-radius: 25px;
  }
  &.user .login:hover {
    border: 1px solid #2871c6;
  }
  &.user .login div {
    padding: 6px 16px;
    background-color: #2871c6;
    border-radius: 25px;
  }
  .user-gg {
    /* position:absolute;
    top: 3px;
    right: 16%; */
    color: black;
    text-align: center;
    img {
      width: 40%;
      border-radius: 50%;
    }
    .name-user-gg {
      font-size: 12px;
    }
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* position: absolute; */
`;

export const Img2 = styled.img`
  width: 40%;
  height: 100%;
  object-fit: cover;
  /* position: absolute; */
`;
export const Logo = styled.div`
  &.logo {
    width: 6%;
    height: 100%;
    position: relative;
  }
`;
export const ListMenu = styled.div`
  &.list-menu {
    width: 26%;
    justify-content: space-between;
    display: flex;
  }
  &.list-menu a {
    padding: 10px;
    /* border: 1px solid transparent; */
    /* text-align: center; */
    list-style: none;
    text-decoration: none;
    font-weight: 600;
    color: #000c;
  }
  &.list-menu a:hover {
    /* border-bottom: 1px solid #0d6efd; */
    color: #4097fd;
    border-radius: 10px;
  }
`;
export const Fqa = styled.div`
  margin-top: 70px;
`;
export const ItemMenu = styled.div``;
export const LogoWow = styled.img`
  width: 100%;
  margin-bottom: 20px;
  transition: 1.2s;
`;
const rotateInAnimation = keyframes`${rotateInDownLeft}`;
const rotateOutAnimation = keyframes`${rotateInDownRight}`;
const fadeInUpAnimation = keyframes`${fadeInUp}`;

export const RotateInDiv = styled.div`
  animation: 1.5s ${rotateInAnimation};
`;
export const RotateOutDiv = styled.div`
  animation: 1.5s ${rotateOutAnimation};
`;
export const FadeInUpDiv = styled.div`
  animation: 4s ${fadeInUpAnimation};
`;
export const FadeInUpDiv2 = styled.div`
  animation: 5s ${fadeInUpAnimation};
`;
export const Logo2 = styled.div`
  &.logo {
    width: 6%;
    height: 100%;
    position: relative;
  }
`;
export const RotateInDiv2 = styled.div`
  animation: 1.5s ${rotateInAnimation};
`;
export const RotateOutDiv2 = styled.div`
  animation: 1.5s ${rotateOutAnimation};
`;
export const LoginCpn = styled.div`
  margin-top: 70px;
`;
