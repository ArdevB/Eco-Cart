import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import ProductsPage from "./pages/Products";
import App from "./App";

import MainLayout from "./layouts/MainLayout";
import ProductDetailsPage from "./pages/ProductDetails";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import AuthLayout from "./layouts/AuthLayout";

import "./index.css";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<App />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="products">
            <Route index element={<ProductsPage />} />
            <Route path=":id" element={<ProductDetailsPage />} />
          </Route>
          <Route path="auth" element={<AuthLayout />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
          <Route path="*" element={<h1>Page not found.</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
