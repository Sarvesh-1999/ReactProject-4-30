import React, { useContext, useEffect } from "react";
import { GlobalAuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateUserRoute = ({ children }) => {
  let { loggedInUser, checkIsLoggedInUser ,loading } = useContext(GlobalAuthContext);
  console.log(loggedInUser);

  useEffect(() => {
    checkIsLoggedInUser();
  },[]);

  if (loading) {
        return <h1 className="mt-20 text-6xl text-center">Loading....</h1>
  }

  return loggedInUser ? children : <Navigate to={"/login"} />;
};

export default PrivateUserRoute;
