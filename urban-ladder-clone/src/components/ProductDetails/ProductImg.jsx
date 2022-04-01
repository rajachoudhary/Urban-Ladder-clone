import React from "react";
import styles from "../../css/ProductImgDesc.module.css";
import { ProductContent } from "./ProductContent";
import { ProductDescRight } from "./ProductDescRight";

export const ProductImg = ({ img, product }) => {
  const mouseMove = (e) => {
    var x = e.clientX - e.currentTarget.getBoundingClientRect().left;
    var y = e.clientY - e.currentTarget.getBoundingClientRect().top;
    console.log(e, x, y);
    var newposX = x - 90;
    var newposY = y - 75;
    var g = document.getElementById("divHide");
    var h = document.getElementById("zoomedImage");
    h.style.backgroundPosition = `${-newposX * 3}px ${-newposY * 3}px `;
    h.style.display = "block";
    g.style.display = "block";
    g.style.left = `${newposX}px`;
    g.style.top = `${newposY}px`;
  };
  const mouseLeave = () => {
    document.getElementById("divHide").style.display = "none";
    document.getElementById("zoomedImage").style.display = "none";
  };
  return (
    <div className={styles.ImgDiv}>
      <div>
        <div
          className={styles.ProductImg}
          onMouseMove={(e) => mouseMove(e)}
          onMouseLeave={() => mouseLeave()}
        >
          <img src={img} alt="Stool" />
          <div id="divHide" className={styles.divHide}></div>
        </div>
        <ProductContent
          dimen={product["Product Dimensions"]}
          price={product.price}
          quant={product.category}
        />
      </div>
      <div className={styles.zoomDiv}>
        <div
          className={styles.zoomImg}
          style={{
            backgroundImage: `url(${img})`,
          }}
          id="zoomedImage"
        ></div>
      </div>
      <ProductDescRight product={product} />
    </div>
  );
};
