import React from 'react'
import { Checkbox } from './Checkbox'
import styles from "./filter.module.css"
export const Finish = () => {
  return (
    <div style={{ overflowX: "hidden",overflowY: "scroll"}}>
  
    <span className={styles.size}><p style={{color:"brown"}}>Basic Finish</p></span>
    <span className={styles.size}><Checkbox/><p >Medium</p></span>
    <span className={styles.size}><Checkbox/><p >Semi Glass</p></span>
    <span className={styles.size}><Checkbox/><p >Dark</p></span>
    <span className={styles.size}><Checkbox/><p >matte</p></span>
    <span className={styles.size}><Checkbox/><p >Powder Coating</p></span>
    <span className={styles.size}><Checkbox/><p >Two-Tone</p></span>
    <span className={styles.size}><Checkbox/><p >classic walnut</p></span>
    <span className={styles.size}><Checkbox/><p >melamine</p></span>
    <span className={styles.size}><Checkbox/><p >Light</p></span>
    <span className={styles.size}><Checkbox/><p >latin american teak</p></span>
    <span className={styles.size}><Checkbox/><p >amber walnut</p></span>
    <span className={styles.size}><Checkbox/><p >californian walnut</p></span>
    <span className={styles.size}><Checkbox/><p >deep wenge</p></span>
  
     
  </div>
  )
}
