import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./AppCss/App.css";

import AboutUs from "./page/aboutUs/AboutUs";
import Blogs from "./page/blog/Blogs";
import FQA from "./page/FQA/FQA";
import Game from "./page/game/Game";
import Home from "./page/home/Home";
import Layout from "./page/Layout";

import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import Login from "./component/login/Login";
import { getFectProdust } from "./redux/slice/producSlice";
import { unwrapResult } from "@reduxjs/toolkit";
// import productApi from 'api/productApi';
import { getMe } from "./redux/slice/producSlice";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import ListItem from "./page/home/component/ListItem";
import InfoGame from "./page/home/childComponent/InfoGame";
import Cart from "./component/cart/Cart";
import InfoBlog from "./page/blog/component/InfoBlog";
import Self from "./component/cart/component/Self";
const config = {
  apiKey: "AIzaSyD6EqzVBTHfD5X8z0xqZ6OpWl3BAdETpmA",
  authDomain: "my-project-phuong-84bb6.firebaseapp.com",
  // ...
};
const firebaseApp = initializeApp(config);

firebase.initializeApp(config);
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFectProdust());
  }, []);

  // const products = data.products;
  // Handle firebase auth changed
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        if (!user) {
          // user logs out, handle something here
          console.log("User is not logged in");
          return;
        }
        try {
          const actionResult = await dispatch(getMe());

          const currentUser = unwrapResult(actionResult);
          console.log("Logged in user: ", currentUser);
        } catch (error) {
          console.log("Failed to login ", error.message);
        }

        const token = await user.getIdToken();
      });

    return () => unregisterAuthObserver();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="game" element={<Game />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="fqa" element={<FQA />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="login" element={<User />} /> */}
          <Route path="infoGame/:id" element={<InfoGame />} />
          <Route path="infoGame/:id/cart" element={<Cart />} />
          <Route path="listItem/infoGame/:id/cart" element={<Cart />} />
          <Route path="infoGame/:id/cart/self" element={<Self />} />
          <Route path="cart/infoGame/:id" element={<InfoGame />} />
          <Route path="cart/self" element={<Self />} />
          <Route path="blogid/:id" element={<InfoBlog />} />
          <Route path="listItem" element={<ListItem />} />
          <Route path="cart" element={<Cart />} />

          <Route path="listItem" element={<ListItem />} />
          <Route path="listItem/infoGame/:id" element={<InfoGame />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
