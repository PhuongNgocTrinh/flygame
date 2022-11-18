import React, { useState } from "react";
import { LoginCpn } from "../../css/cssComponent";

import firebase from "firebase/compat/app";
import {
  getAuth,
  signOut,
  GoogleAuthProvider,
  getRedirectResult,
} from "firebase/auth";
import "firebaseui/dist/firebaseui.css";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
const uiConfig = {
  signInFlow: "redirect",
  signInSuccessUrl: "/",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
};

const Login = () => {
  return (
    <LoginCpn className="loging">
      Login
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </LoginCpn>
  );
};

export default Login;
