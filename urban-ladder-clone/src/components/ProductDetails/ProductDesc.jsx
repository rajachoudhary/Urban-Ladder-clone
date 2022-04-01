import React from "react";
import { ProductDescRight } from "./ProductDescRight";
import { ProductImg } from "./ProductImg";

export const ProductDesc = ({ product }) => {
  return (
    <div>
      <ProductImg img={product.img} product={product} />
    </div>
  );
};
