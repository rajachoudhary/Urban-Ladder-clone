import React from "react";
import { TiPhoneOutline, TiSocialFacebook } from "react-icons/ti";
import { MdMessage } from "react-icons/md";
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
import { SiPinterest } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";
import style from "../../../css/middleFooter.module.css"

export const MiddleFooter = () => {
  return (
    <div className={style.middleNavbarContainer}>
        <div className={style.leftContainer}>
            <div className={style.footerHeader}>Connect With Us:</div>
            <div>
                <TiPhoneOutline className={style.middleFooterIcon} />
                <MdMessage className={style.middleFooterIcon}/>
                <TiSocialFacebook className={style.middleFooterIcon}/>
                <AiOutlineTwitter className={style.middleFooterIcon}/>
                <SiPinterest className={style.middleFooterIcon}/>
                <AiFillYoutube className={style.middleFooterIcon}/>
                <FiInstagram className={style.middleFooterIcon}/>
                <AiFillLinkedin className={style.middleFooterIcon}/>
            </div>
            <div className={style.contactNo}>080-46666777</div>
        </div>
        <div className={style.rightContainer}>
            <div className={style.footerHeader}>Download App</div>
            <div>
                <div>
                    <img  src="https://www.ulcdn.net/media/badges/app_store/app_store_badge.svg" alt="play store" />
                </div>
                <div>
                    <img  src="https://www.ulcdn.net/media/badges/play_store/google-play-badge.png" alt="play store" />
                </div>
            </div>
        </div>
    </div>
  );
};
