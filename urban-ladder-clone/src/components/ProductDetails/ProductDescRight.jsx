import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import styles from "../../css/ProductDetails.module.css";
import compare from "../../svgFiles/compare.png";
import { ProductColor } from "./ProductColor";
import { ProdDescPrice } from "./ProdDescPrice";

export const ProductDescRight = ({ product }) => {
  console.log(product.finish.length);
  return (
    <div className={styles.productDescRight}>
      <div className={styles.productDescRightWishlistCompare}>
        <div className={styles.Wishlist}>
          <FontAwesomeIcon icon={faHeart} className={styles.icon} />
          <div className={styles.textIcon}>Add to Wishlist</div>
        </div>
        <div className={styles.Wishlist1}>
          <FontAwesomeIcon icon={faStar} className={styles.icon} />
          <div className={styles.textIcon}>Add to compare</div>
        </div>
      </div>
      <div className={styles.discount}>
        <img
          src="https://www.ulcdn.net/media/sale/product-page-tag-bg/unnamed.jpg?1572547689"
          alt="disc"
        />
        <div className={styles.discAmt}>
          {Math.round(
            (product.discount_price.split("₹")[1].split(",").join("") /
              product.priceSort) *
              100
          )}
          % OFF
        </div>
        <div className={styles.discDisclaim}>
          * All discounts are dynamic and can change at any time.
        </div>
        {product.finish.length > 0 && (
          <div>
            <h6 className={styles.headerDesc}>Colour</h6>
            <ProductColor finish={product.finish} />
          </div>
        )}
        {product.size.length > 0 && (
          <div>
            <h6 className={styles.headerDesc}>SIZE</h6>
            <ProductColor finish={product.size} />
          </div>
        )}
        <ProdDescPrice product={product} />
      </div>
    </div>
  );
};
