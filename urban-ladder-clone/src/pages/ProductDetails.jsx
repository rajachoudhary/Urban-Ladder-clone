import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { ProductDesc } from "../components/ProductDetails/ProductDesc";
import { ProductDetailsTitle } from "../components/ProductDetails/ProductDetailsTitle";
import { TrustWrapper } from "../components/ProductDetails/TrustWrapper";
import styles from "../css/ProductDetails.module.css";
export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`https://urbanladderclone.herokuapp.com/api/products/${id}`)
      .then((res) => res.json())
      .then((res) => setProduct(res));
    console.log(product);
  }, []);
  return (
    <div className={styles.productdetail}>
      {product[0] != undefined && (
        <>
          <ProductDetailsTitle
            category={product[0].category}
            title={product[0].title}
            brand={product[0].brand}
          />
          <ProductDesc product={product[0]} />
        </>
      )}
      <TrustWrapper />
    </div>
  );
};
