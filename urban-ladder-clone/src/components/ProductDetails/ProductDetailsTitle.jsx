import React from "react";
import { Link } from "react-router-dom";
import styles from "../../css/ProductDetails.module.css";

export const ProductDetailsTitle = ({ category, brand, title }) => {
  console.log(category);
  return (
    <div>
      <div className={styles.productTitle1}>
        <Link className={styles.link} to="/">
          Furniture Home
        </Link>
        <span>&gt;</span>
        <Link className={styles.link} to="/">
          Sale
        </Link>
        <span>&gt;</span>
        <Link className={styles.link} to="/">
          Living
        </Link>
        <span>&gt;</span>
        <Link className={styles.link} to="/products">
          {category}
        </Link>
      </div>
      <div className={styles.productTitle2}>
        <h1>{title}</h1>
        <p>{brand}</p>
      </div>
    </div>
  );
};
