import axios from 'axios';
import React from 'react'
import { useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { allProductApi } from '../../Redux/Allproduct/productApi';
import { ProductCard } from './ProductCard';
import styles from "./all_product.module.css";
import { Filter } from './filter/Filter';

export const All_Product = () => {
 
  const {all_product} = useSelector((state)=>state.allproduct_reducer )
 
    const [list,setList] = useState(all_product);
    console.log("list",list)
    const [selectedPrice, setSelectedPrice] = useState([500, 100000]);
    const dispatch = useDispatch();
   
    const handleFilter = (logic)=>{
      console.log("logic",logic)
      if(logic =="lowToHigh"){
        dispatch(allProductApi(1))
      }
      if(logic == "highToLow"){
        dispatch(allProductApi(-1))
      }

    }
   
    const handleChangePrice = (event, value) => {
      setSelectedPrice(value);
    };
   
    useEffect(()=>{
      dispatch(allProductApi())
     
   
  },[])
  
    useEffect(()=>{
    
      setList(all_product)
   
  },[all_product])

  const applyFilters = () => {
    

   let updatedList = all_product
    // Price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

      updatedList = updatedList.filter(
      (item) => {
        return(
         
          item.priceSort >= minPrice && item.priceSort <= maxPrice
        )
      }
    );

    setList(updatedList);

    // !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedPrice]);

  
  return (
    <>
    
   
    <Filter handleFilter={handleFilter }   selectedPrice={selectedPrice} changedPrice={handleChangePrice}/>
    <div className={styles.prod_main}>
     
 
      {list.map((item)=>{ 
          
        return(
       
          <ProductCard key={item.id} item={item}/>
          
        )
      })},
      
     
    </div>
    </>
   
  )
}
