import React from "react";
import styles from "../../css/browsepop.module.css";

export default function Browsepop() {
  return (
    <div className={styles.browsepop}>
      <div className={styles.title}>Browse Popular Categories</div>
      <div className={styles.line}></div>
      <div className={styles.blocks}>
        <div>
          <div className={styles.imgsec}>
            <img
              src={
                "https://www.ulcdn.net/images/products/357888/thumb/Victoria_4_Seater_Dining_Table_Teak_Finish_LP.jpg?1626928719"
              }
              alt="1st"
            />
          </div>
          <div className={styles.propsec}>
            <div>4 Seater Dining Table Sets</div>
            <div>Options starting from ₹11599</div>
          </div>
        </div>
        <div>
          <div className={styles.imgsec}>
            <img
              src={
                "https://www.ulcdn.net/images/products/290662/thumb/Caribu_Doris_Dark_Blue_6_Seater_LP.jpg?1574698279"
              }
              alt="2nd"
            />
          </div>
          <div className={styles.propsec}>
            <div>6 Seater Dining Table Sets</div>
            <div>Options starting from ₹11599</div>
          </div>
        </div>
        <div>
          <div className={styles.imgsec}>
            <img
              src={
                "https://www.ulcdn.net/images/products/290732/thumb/Caribu_4_to_6_Seater_LP.jpg?1574740315"
              }
              alt="3rd"
            />
          </div>
          <div className={styles.propsec}>
            <div>Folding Dining Table Sets</div>
            <div>Options starting from ₹11599</div>
          </div>
        </div>
        <div>
          <div className={styles.imgsec}>
            <img
              src={
                "https://www.ulcdn.net/images/products/61709/thumb/Danton_gordon_3_Seater_Folding_Dining_Table_Set_MH_00_LP.jpg?1446801071"
              }
              alt="4th"
            />
          </div>
          <div className={styles.propsec}>
            <div>2&3 Seater Dining Table Sets</div>
            <div>Options starting from ₹11599</div>
          </div>
        </div>
        <div>
          <div className={styles.imgsec}>
            <img
              src={
                "https://www.ulcdn.net/images/products/476475/thumb/Arabia_Oribi_8_Seater_Dining_Table_Set_MH_00_LP.jpg?1646720923"
              }
              alt="5th"
            />
          </div>
          <div className={styles.propsec}>
            <div>8 Seater Dining Table Sets</div>
            <div>Options starting from ₹11599</div>
          </div>
        </div>
        <div>
          <div className={styles.imgsec}>
            <img
              src={
                "https://www.ulcdn.net/images/products/355565/thumb/Laurel_Breakfast_Table_LP.jpg?1626789336"
              }
              alt="6th"
            />
          </div>
          <div className={styles.propsec}>
            <div>Breakfast Tables</div>
            <div>Options starting from ₹11599</div>
          </div>
        </div>
        <div>
          <div className={styles.imgsec}>
            <img
              src={
                "https://www.ulcdn.net/images/products/157807/thumb/Wesley_Dalla_4_Seater_Round_Glass_Top_Dining_Table_Set_Grey_LP.jpg?1508905364"
              }
              alt="7th"
            />
          </div>
          <div className={styles.propsec}>
            <div>All Dining Table Sets</div>
            <div>Options starting from ₹11599</div>
          </div>
        </div>
      </div>
    </div>
  );
}
