import React from 'react';
import styles from './features.module.css';

export default function Features() {
  return (
    <div className={styles.features}>
        <div>
            <div className={styles.title}>FEATURES</div>
            <div className={styles.title}>PROPERTIES</div>
            <div className={styles.title}>CARE INSTRUCTIONS</div>
            <div className={styles.title}>WARRANTY</div>
            <div className={styles.title}>RETURNS</div>
            <div className={styles.title}>QUALITY PROMISE</div>
        </div>
        <div>
            <ul>
                <li>More the merrier. Throwing a party or hosting extended family? Caribu magically expands to accommodate eight   guests. With its modern aesthetics and sleek finish, this dining table is a delight to homeowners and visitors alike.</li>  
                <li>Made from Chrome</li>
                <li>Comfortably seats 6 and can be extended to seat 8</li>
                <li>Please refer to images for dimension details</li>
                <li>Indoor use only</li>
            </ul>
        </div>
    </div>
  )
}
