import { StylesProvider } from "@material-ui/core";
import styles from "../../css/ProductDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faTruck } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import EMIImage from "../../svgFiles/emi.png";
import Warranty from "../../svgFiles/warrenty.png";
import { useSelector } from "react-redux";
import { addCartApi } from "../../Redux/Allproduct/productApi";
import { useNavigate } from "react-router-dom";

export const ProdDescPrice = ({ product }) => {
  const { token } = useSelector((state) => state.User);
  const navigate = useNavigate();
  return (
    <div>
      <div className={styles.priceDesc}>
        <div className={styles.priceFlex}>
          <div className={styles.exactPrice}>
            MRP&nbsp;<div className={styles.exactAmt}>{product.price}</div>
          </div>
          <div className={styles.discPrice}>
            <div className={styles.discPriceAmt}>{product.discount_price}</div>
            <div className={styles.inclusive}>(inclusive of all taxes)</div>
          </div>
        </div>
        <div className={styles.emi}>
          <img width="40px" src={EMIImage} />
          &nbsp;
          <span>EMIs from</span>&nbsp;
          <b>{product.emi}</b>&nbsp;
          <span className={styles.knowLink}>KNOW MORE</span>
        </div>
        <button
          className={styles.addCart}
          onClick={() => {
            addCartApi(product._id, token);
            navigate("/cart");
          }}
        >
          ADD TO CART
        </button>
        <div className={styles.warranty}>
          <img src={Warranty} width="10%" alt="warranty" />
          <div>
            <div>
              <b>120 month warranty</b> on this product{" "}
            </div>
            <div className={styles.knowLink}>KNOW MORE</div>
          </div>
        </div>
        <div className={styles.location}>
          <FontAwesomeIcon icon={faLocationDot} />
          <span className={styles.place}>Bangalore - 560001</span>
          <span className={styles.change}>Change</span>
        </div>
        <div className={styles.deliver}>
          <FontAwesomeIcon icon={faTruck} />
          <span className={styles.place}>
            Delivery Between &nbsp;<b>Apr 10 - Apr 12</b>
          </span>
        </div>
        <ul className={styles.deliverList}>
          <li>
            We are committed to giving you the best shopping experience with
            on-time deliveries and quality products. We provide swift
            installation within 48 hours from the day of delivery. Happy
            shopping!
          </li>
        </ul>
      </div>
    </div>
  );
};
