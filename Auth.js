import React from "react";
import Login from "../Login/Login";
import Signup from "../SignUp/Signup";
import { useState } from "react";

const Auth = () => {
  const [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = (e) => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  if (authMode == "signin") {
    return <Login changeAuthMode={changeAuthMode}></Login>;
  } else {
    return <Signup changeAuthMode={changeAuthMode}></Signup>;
  }
};

export default Auth;
