import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../home/home';
import ProductPage from '../productPage/ProductPage';
import AdminLogin from '../admin/adminlogin';
import Cart from '../cart/cart';
import SignUp from '../signup/signup';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productpage" element={<ProductPage />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default AppRoutes;
