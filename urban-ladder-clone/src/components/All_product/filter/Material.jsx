import React from 'react'
import { Checkbox } from './Checkbox'
import styles from "./filter.module.css"
export const Material = () => {
  return (
    <div style={{ overflowX: "hidden",overflowY: "scroll"}}>
  
    <span className={styles.size}><p style={{color:"brown"}}>Material</p></span>
    <span className={styles.size}><Checkbox/><p >Solid Wood</p></span>
    <span className={styles.size}><Checkbox/><p >Engineered Wood</p></span>
    <span className={styles.size}><Checkbox/><p >Fabric</p></span>
    <span className={styles.size}><Checkbox/><p >Iron</p></span>
    <span className={styles.size}><Checkbox/><p >Metal</p></span>
    <span className={styles.size}><p style={{color:"brown",marginTop:"10px"}} >Upholstery Material</p></span>
    <span className={styles.size}><Checkbox/><p >No Upholstery</p></span>
    <span className={styles.size}><Checkbox/><p >Fabric</p></span>
    <span className={styles.size}><Checkbox/><p >Leatherette</p></span>
  
  
     
  </div>
  )
}
