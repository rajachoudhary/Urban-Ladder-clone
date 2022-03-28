import React from "react";
import { ReactComponent as QuestionMark } from "../svgFiles/questionMark.svg";
import { ReactComponent as TrackItem } from "../svgFiles/trackItem.svg";
import style from "../css/topNavbar.module.css";
export const TopNavbar = () => {
  return (
    <>
      <div className={style.topNavbarContainer}>
        <div>
          <div>
            <QuestionMark className={style.hoverColorChange} />
            <div>Help</div>
          </div>
          <div>
            <TrackItem className={style.hoverColorChange} />
            <div>Track Order</div>
          </div>
        </div>
        <div>
          <div className={style.hoverColorChange}>Stores</div>
          <div className={style.hoverColorChange}>Bulk Orders</div>
          <div className={style.hoverColorChange}>Gift Cards</div>
        </div>
      </div>
      <hr className={style.topNavbarHr} />
    </>
  );
};
