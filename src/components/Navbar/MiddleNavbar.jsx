import React from "react";
import style from "../../css/middleNavbar.module.css";
import { ReactComponent as LogoBox } from "../../svgFiles/logoBox.svg";
import { ReactComponent as UrbanLadder } from "../../svgFiles/urbanLadder.svg";
import { ReactComponent as TrackItem } from "../../svgFiles/trackItem.svg";
import { ReactComponent as User } from "../../svgFiles/user.svg";
import { ReactComponent as Like } from "../../svgFiles/like.svg";
import { ReactComponent as Cart } from "../../svgFiles/cart.svg";
import { LogInButton } from "./LogInButton";

export const MiddleNavbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <div className={style.middleNavbarContainer}>
        <div>
          <LogoBox />
          <UrbanLadder />
        </div>
        <div>
          <input placeholder="Search" />
        </div>
        <div className={style.hoverColorChange}>
          <TrackItem className={style.onHoverColorChange}/>
          <User className={style.onHoverColorChange}
            // className={anchorEl === null ? style.icons2 : style.icon2hover}
            onMouseEnter={(e) => handleClick(e)}
          />
          <Like className={style.onHoverColorChange}/>
          <Cart className={style.onHoverColorChange}/>
        </div>
      </div>
      <LogInButton
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
          />
      <div className={style.footerLine}></div>
    </>
  );
};
