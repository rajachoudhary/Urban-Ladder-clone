import React from 'react'
import SliderProton from './SliderProton'
import styles from "./filter.module.css";
export const Price = ({value,changedPrice}) => {
  return (
    <div className={styles.price_main}>
      <div>
      <p style={{color:"brown"}}>Price</p>
       <span className={styles.pricedisplay}><p>{value[0]}</p> <p>{value[1]}</p></span> 
      <SliderProton value={value} changedPrice={changedPrice}/>
      <div className={styles.price_div}>
        <span>
        <input type="radio"/><p>₹7,498-₹19,999</p>
        </span>
       <span>
       <input type="radio"/><p>₹20,000-₹24,999</p>
       </span>
       
      </div>
      <div className={styles.price_div}>
        <span>
        <input type="radio"/><p>₹7,498-₹19,999</p>
        </span>

     <span>
     <input type="radio"/><p>₹20,000-₹24,999</p>
       </span>

        
      </div>
      </div>
    
     
    </div>
  )
}
