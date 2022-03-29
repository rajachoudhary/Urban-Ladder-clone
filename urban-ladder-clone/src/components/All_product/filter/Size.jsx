import React from 'react'
import { Checkbox } from './Checkbox'
import styles from "./filter.module.css"
export const Size = () => {
  return (
    <div style={{ overflowX: "hidden",overflowY: "scroll"}}>
  
      <span className={styles.size}><p style={{color:"brown"}}>Bed Size</p></span>
      <span className={styles.size}><Checkbox/><p >King</p></span>
      <span className={styles.size}><Checkbox/><p >Queen</p></span>
      <span className={styles.size}><Checkbox/><p >Single</p></span>
      <span className={styles.size}><Checkbox/><p >Bunk</p></span>
    
       
    </div>
  )
}
