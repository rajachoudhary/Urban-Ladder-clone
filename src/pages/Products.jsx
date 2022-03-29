import React from "react";
import { Outlet } from "react-router-dom";
import { All_Product } from "../components/All_product/All_Product";
export const Products = () => {
  return (
    <div>
     <All_Product/>
      <Outlet />
    </div>
  );
};
