import React from 'react'
//import { Checkbox } from './Checkbox';
import {Checkbaoxpatron} from "./Checkbaoxpatron"
import styles from "./filter.module.css"
export const Brand = ({brands,handleChangeChecked}) => {
  return (
    <div style={{ overflowX: "hidden",overflowY: "auto",height : "200px"}}>
  
    <span className={styles.size}><p style={{color:"brown"}}>Brand Name</p></span>
    {/* <span className={styles.size}><Checkbox/><p >By Dreamzz Furniture</p></span>
    <span className={styles.size}><Checkbox/><p >By Urban Ladder</p></span>
    <span className={styles.size}><Checkbox/><p >By Wood Edge</p></span>
    <span className={styles.size}><Checkbox/><p >By Vintej Home</p></span>
    <span className={styles.size}><Checkbox/><p >By Intercraft</p></span>
    
    <span className={styles.size}><Checkbox/><p >By Durian</p></span>
    <span className={styles.size}><Checkbox/><p >By @Home</p></span>
    <span className={styles.size}><Checkbox/><p >By BLACKSMITH STREET</p></span>
   */}
  
     {brands.map((item)=>{
       
       return(
        <span key={item.id} className={styles.size_brand}><Checkbaoxpatron key={item.id} item={item} handleChangeChecked={handleChangeChecked} /><p >{item.label}</p></span>
       )
     })}
  </div>
  )
}
