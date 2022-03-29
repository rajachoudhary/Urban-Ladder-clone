import React from 'react'
import styles from "../all_product.module.css";
export const Recommends = ({handleFilter}) => {
    const filterRecommend = (logic)=>{
        handleFilter(logic)
    }
  return (
    <>
    <div className={styles.recommends}>
        <p>Recommended</p>
        <p onClick={()=>filterRecommend("lowToHigh")}>Price : Low to High</p>
        <p onClick={()=>filterRecommend("highToLow")}>Price : High to Low</p>
        <p>New Arrivals</p>
        <p>Discount</p>
    </div>
    </>
  )
}
