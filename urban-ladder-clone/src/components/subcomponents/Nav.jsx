import React from 'react'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import styles from'../../css/nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.cartnav}>
        <div className={styles.lnav}>
          <div className={styles.hoverColorChange}>
              <HelpOutlineOutlinedIcon />
              <span>Help</span>
          </div>
              
        </div>
        <div className={styles.urbanLogo}></div>
        <div className={styles.rnav}>
          <div className={styles.hoverColorChange}>
            <HttpsOutlinedIcon />
            <span>Secure Payment</span>
          </div>
          <div>
            <button className={styles.navbtn}>Track Order</button>
            <button className={styles.navbtn}>Login</button>
            <button className={styles.navbtn}>Signup</button>
            
          </div>
        </div>
    </nav>
  )
}
