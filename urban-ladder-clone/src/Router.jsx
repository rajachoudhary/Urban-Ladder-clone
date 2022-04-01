import React from "react";
import { Route, Routes } from "react-router-dom";
import  Address  from "./pages/Address";
import  Cart  from "./pages/Cart";
import { Home } from "./pages/Home";
import  Payment  from "./pages/Payment";
import { Products } from "./pages/Products";
import { ProductDetails } from "./pages/ProductDetails";
export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route path=":productCategory">
            <Route path=":productName" />
          </Route>
        </Route>
        <Route path="/productDetail/:id" element={<ProductDetails/>}></Route>
        <Route path="/cart" element={<Cart />} >
        </Route>
            <Route path="/cart/address" element={<Address />}/>
            <Route path="/cart/address/payment" element={<Payment />} />

      </Routes>
    </div>
  );
};
