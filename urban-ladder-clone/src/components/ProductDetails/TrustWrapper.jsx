import React from "react";
import styles from "../../css/TrustWrapper.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScrewdriverWrench,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

export const TrustWrapper = () => {
  return (
    <div>
      <div className={styles.division}></div>
      <div className={styles.TrustWrapper}>
        <div>
          "I have purchased various pieces of furniture from Urban ladder and
          the experience of choice to customer support has been very good. Keep
          it up Urban Ladder with newer designs and range!"
        </div>
        <div>
          <span>Kavitha Iyer Rodrigues via Facebook&nbsp;</span>
          <span className={styles.knowMore}>Read More</span>
        </div>
      </div>
      <div className={styles.benefits}>
        <div>
          <FontAwesomeIcon className={styles.icon} icon={faTruck} />
          <div className={styles.content}>Free Home Delivery</div>
          <div className={styles.separator}></div>
          <div className={styles.msg}>Available in select cities.</div>
        </div>
        <div>
          <FontAwesomeIcon className={styles.icon} icon={faScrewdriverWrench} />
          <div className={styles.content}>Free Installation</div>
          <div className={styles.separator}></div>
          <div className={styles.msg}>
            We assemble the product, and clear away the packaging.
          </div>
        </div>
      </div>
      <div className={styles.division}></div>
    </div>
  );
};
