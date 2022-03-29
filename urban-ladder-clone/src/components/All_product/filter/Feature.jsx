import React from 'react'
import { Checkbox } from './Checkbox'
import styles from "./filter.module.css"
export const Feature = () => {
  return (
    <div style={{ overflowX: "hidden",overflowY: "scroll"}}>
  
    <span className={styles.size}><p style={{color:"brown"}}>Bed Height</p></span>
    <span className={styles.size}><Checkbox/><p >Standard</p></span>
    <span className={styles.size}><Checkbox/><p >Low</p></span>
    <span className={styles.size}><p  style={{color:"brown",marginTop:"10px"}}>Headboard Height</p></span>
    <span className={styles.size}><Checkbox/><p >Standard</p></span>
    <span className={styles.size}><Checkbox/><p >High</p></span>
    <span className={styles.size}><Checkbox/><p >standard</p></span>
    <span className={styles.size}><Checkbox/><p >Without Headboard</p></span>
    
     
  </div>
  )
}
