import React from "react";
import { useState } from "react";
import styles from "./all_product.module.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiOutlineQuestion } from "react-icons/ai";
export const ProductCard = ({ item }) => {
  const { title, sub_title, brand, price, discount_price, emi, img } = item;
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div
        className={styles.prod_card}
        onMouseLeave={() => setShow(false)}
        onMouseEnter={() => setShow(true)}
      >
        {show ? (
          <button className={styles.heart_btn}>
            <AiOutlineHeart></AiOutlineHeart> Add To Wishlist
          </button>
        ) : (
          <AiOutlineHeart className={styles.heart}></AiOutlineHeart>
        )}

        <div className={styles.ribbon}>20% off</div>
        <div className={styles.prod_img}>
          <img style={{ width: "100%" }} src={img} />
        </div>

        <div className={styles.des}>
          <p style={{ color: "black", fontSize: "15px" }}>{title}</p>
          <p>{sub_title}</p>
          <p>{brand}</p>
        </div>
        <div
          style={{
            fontSize: "14px",
            textAlign: "center",
            marginBottom: "10PX",
          }}
        >
          <span style={{ color: "grey", textDecoration: "line-through" }}>
            {" "}
            {price}
          </span>
          <span> {discount_price} </span>
          <span style={{ color: "grey" }}>EMI From {emi} </span>
        </div>
        <div className={styles.btn_div}>
          <button className={styles.add_to_compare_btn}>ADD TO COMPARE</button>
          <button
            className={styles.view4option_btn}
            onClick={() => navigate(`/productDetail/${item._id}`)}
          >
            VIEW 2 OPTIONS
          </button>
        </div>
      </div>
    </>
  );
};
