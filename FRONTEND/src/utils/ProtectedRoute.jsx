import React from "react";
import { useCookies } from "react-cookie";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAdmin = false }) => {
    const [cookies] = useCookies(["user"]);
  
  let isAuthenticated = cookies.hasOwnProperty("user") && Object.keys(cookies.user).length !== 0;
  
  return isAuthenticated ? (
    isAdmin ? (
      cookies.user.isAdmin ? (
        <Outlet />
      ) : (
        <h1>You are not allowed to access this resource!!, Only for admins</h1>
      )
    ) : (
      <Outlet />
    )
  ) : (
    <div>
      <h1>You need to login to access this !!</h1>
      <Navigate to="/" />
    </div>
  );
};

export default ProtectedRoute;
