import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if(loading){
    return <>hi boss</>
  }
  if (!user) {
   return  <Navigate to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRoutes;
