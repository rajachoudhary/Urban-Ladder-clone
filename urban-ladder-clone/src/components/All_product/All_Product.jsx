import axios from 'axios';
import React from 'react'
import { useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { allProductApi } from '../../Redux/Allproduct/productApi';
import { ProductCard } from './ProductCard';
import styles from "./all_product.module.css";
import { Filter } from './Filter';
export const All_Product = () => {
    const [data,setData] = useState();
    const dispatch = useDispatch();
    const {all_product} = useSelector((state)=>state.allproduct_reducer )
    useEffect(()=>{
        dispatch(allProductApi())
    },[])
  return (
    <>
    
   
    <Filter/>
    <div className={styles.prod_main}>
     
    
      {all_product.map((item)=>{
        return(
          <ProductCard key={item.id} item={item}/>
        )
      })}
     
    </div>
    </>
   
  )
}
