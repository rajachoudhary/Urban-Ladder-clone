import React from 'react'
import style from "../../css/popularSlider.module.css"


export const PopularSliderCard = ({item}) => {
    const {title,sub_title,brand,price,discount_price,emi,img} = item;
    return (
        
        <div className={style.popularCardContainer} >
            
            <div className={style.prod_img}>
                <img  style={{  width: "100%"}} src={img}/>
            </div>
        
            <div className={style.des}>
                <p style={{color:"black",fontSize:"15px"}}>{title}</p>
                <p>{sub_title}</p>
                <p>{brand}</p>
            </div>
            <div style={{fontSize:"14px"}} >
                <span  style={{color:"grey",textDecoration:"line-through"}}> ₹{price}</span>
                <span> ₹{discount_price}  </span>
                <span style={{color:"grey"}}>EMI From ₹{emi} </span>
            </div>
            
        </div>
    
        
    )
}
