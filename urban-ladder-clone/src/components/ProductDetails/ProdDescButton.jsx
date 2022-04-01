import React from "react";
import styles from "../../css/ProductDetails.module.css";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
export const ProdDescButton = ({ el, selected, setSelect }) => {
  return (
    <div className={styles.prodDescB}>
      {selected ? (
        <ToggleButton
          size="sm"
          className={`mt-1 ${styles.buttonSize}`}
          id="toggle-check"
          type="checkbox"
          variant="outline-danger"
          value="1"
        >
          {el}
        </ToggleButton>
      ) : (
        <ToggleButton
          size="sm"
          className={`mt-1 ${styles.buttonSize}`}
          id="toggle-check"
          type="checkbox"
          variant="outline-secondary"
          value="1"
          onClick={() => setSelect(el)}
        >
          {el}
        </ToggleButton>
      )}
    </div>
  );
};
