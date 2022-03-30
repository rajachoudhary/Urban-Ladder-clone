import React from 'react'
import styles from "./all_product.module.css"
export const ProductCard = ({item}) => {
    const {title,sub_title,brand,price,discount_price,emi,img} = item;
  return (
      <>
 <div className={styles.prod_card}>
     <div className={styles.ribbon}>20% off</div>
     <div className={styles.prod_img}>
     <img  style={{  width: "100%"}} src={img}/>
     </div>
    
    <div className={styles.des}>
        <p style={{color:"black",fontSize:"15px"}}>{title}</p>
        <p>{sub_title}</p>
        <p>{brand}</p>
    </div>
    <div style={{fontSize:"14px"}} >
        <span  style={{color:"grey",textDecoration:"line-through"}}> ₹{price}</span>
       <span> ₹{discount_price}  </span>
       <span style={{color:"grey"}}>EMI From ₹{emi} </span>
    </div>
    <div className={styles.btn_div}>
        <button className={styles.add_to_compare_btn}>ADD TO COMPARE</button>
        <button className={styles.view4option_btn}>VIEW 4 OPTIONS</button>
    </div>
   
 </div>
     
      </>
    
  )
}
