import React from "react";
import style from "../../../css/topFooter.module.css";
export const TopFooter = () => {
  return (
    <div className={style.topFooterContainer}>
      <div >
        <div className={style.header}>The Company :</div>
        <div className={style.subContainer} style={{gap:"5rem",display:"flex"}}>
          <div>
            <div>About Us</div>
            <div>Blog</div>
            <div>Help</div>
            <div>Inside Ul</div>
          </div>
          <div>
            <div></div>
            <div>Careers</div>
            <div>Press </div>
            <div>Team</div>
            <div>Privacy Policy</div>
          </div>
        </div>
      </div>
      <div style={{width:"250px"}}>
        <div className={style.header}>More Information:</div>
        <div className={style.subContainer}>
          <div>
            <div>Fees and Payment</div>
            <div>Shipping & Delivery</div>
            <div>Terms and Conditions</div>
            <div>Warranty, Return and Refund</div>
          </div>
          <div>
            <div></div>
            <div>Contact Us</div>
            <div>Visit Us </div>
            <div>Buy In Bulk</div>
            
          </div>
        </div>
      </div>
      <div style={{width:"150px"}}>
        <div className={style.header}>Explore More</div>
        <div className={style.subContainer}>
          <div>
            <div>Refer & Earn</div>
            <div>Gift Cards</div>
            
          </div>
        </div>
      </div>
      <div>
        <div className={style.header}>Address</div>
        <div className={style.subContainer}>
          <div>
            <div>
              Reliance Retail Limited, 3rd Floor, Court House, Lokmanya Tilak
              Marg, Dhobi Talao, Mumbai- 400 002, Maharashtra, India CIN:
            </div>
            <div>U01100MH1999PLC120563</div>
          </div>
        </div>
      </div>
    </div>
  );
};
