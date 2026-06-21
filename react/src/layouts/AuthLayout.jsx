import React from "react";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <>
      <h1>Auth Pages</h1>
      <Outlet />
    </>
  );
};

export default AuthLayout;
