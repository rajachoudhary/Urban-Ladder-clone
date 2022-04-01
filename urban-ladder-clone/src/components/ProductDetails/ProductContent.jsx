import React from "react";
import styles from "../../css/ProductImgDesc.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

export const ProductContent = ({ dimen, price, quant }) => {
  let [show, setShow] = React.useState(false);
  return (
    <div className={styles.prodContent}>
      <div className={styles.prodContentHead}>PRODUCT DETAILS</div>
      <ul>
        <li>
          <b>Net Quantity :&nbsp;</b>
          <span>1 N</span>
        </li>
        <li>
          <b>Product Dimensions :&nbsp;</b>
          <span>{dimen}</span>
        </li>
        <li>
          <b>Package Contains :</b>
          <span>1 {quant.split("s").join("")}</span>
        </li>
        <li>
          <b>Country of Origin :&nbsp;</b>
          <span>India</span>
        </li>
      </ul>
      {!show ? (
        <div
          className={styles.prodContentHead}
          onClick={() => setShow((prev) => !prev)}
        >
          More Information <FontAwesomeIcon icon={faCaretDown} />
        </div>
      ) : (
        <div
          className={styles.prodContentHead}
          onClick={() => setShow((prev) => !prev)}
        >
          Less Information <FontAwesomeIcon icon={faCaretUp} />
        </div>
      )}

      {show && (
        <ul>
          <li>
            <b>MRP :&nbsp;</b>
            <span>₹18,332.00 (Incl. of all taxes)</span>
          </li>
          <li>
            <b>Sold By :&nbsp;</b>
            <span>
              {" "}
              Reliance Retail Limited, 3rd Floor, Court House, Lokmanya Tilak
              Marg, Dhobi Talao, Mumbai-400002
            </span>
          </li>
          <li>
            <b>Consumer Care Details :</b>
            <span>
              {" "}
              Reliance Retail Limited, 3rd Floor, Court House, Lokmanya Tilak
              Marg, Dhobi Talao, Mumbai-400002
            </span>
          </li>
          <li>
            <b>Marketed By :&nbsp;</b>
            <span>
              {" "}
              Tirupati Coirs Pvt. Ltd. 176-D, Abu Lane, Meerut Cantt. ,
              U.P.-250001.
            </span>
            <li className={styles.liDiv}>
              <b>Manufactured By :&nbsp;</b>
              <span>
                {" "}
                Tirupati Coirs Pvt. Ltd. 176-D, Abu Lane, Meerut Cantt. ,
                U.P.-250001.
              </span>
            </li>
          </li>
        </ul>
      )}
    </div>
  );
};
