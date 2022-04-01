import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProductApi } from "../../Redux/Allproduct/productApi";
import { ProductCard } from "./ProductCard";
import styles from "./all_product.module.css";
import { Filter } from './filter/Filter';
import { PopularSlider } from '../LandingPage/PopularSlider';
import { TopFooter } from '../LandingPage/Footer/TopFooter';
import { MiddleFooter } from '../LandingPage/Footer/MiddleFooter';
import { BottomFooter } from '../LandingPage/Footer/BottomFooter';
import {useLocation} from "react-router-dom";
import style from "../../css/paragraph.module.css";

export const All_Product = () => {
 
  const {all_product} = useSelector((state)=>state.allproduct_reducer )
 const {search} = useLocation();
 console.log("query",search)
    const [list,setList] = useState(all_product);
   // console.log("list",list)
    const [selectedPrice, setSelectedPrice] = useState([500, 100000]);
    const [brands, setBrands] = useState([
      { id: 1, checked: false, label: 'By Dreamzz Furniture' },
      { id: 2, checked: false, label: 'By Urban Ladder' },
      { id: 3, checked: false, label: 'By Wood Edge' },
      { id: 4, checked: false, label: 'By Vintej Home' },
      { id: 5, checked: false, label: 'By Intercraft' },
      { id: 6, checked: false, label: 'By Durian' },
      { id: 7, checked: false, label: 'By @Home' },
      { id: 8, checked: false, label: 'By BLACKSMITH STREET' },
     
    ]);
    const dispatch = useDispatch();
    const handleChangeChecked = (id) => {
      {console.log("utk1",id)}
      const brandsStateList = brands;
      const changeCheckedBrands = brandsStateList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      );
      setBrands(changeCheckedBrands);
    };
  


  const handleFilter = (logic) => {
    console.log("logic", logic);
    if (logic == "lowToHigh") {
      dispatch(allProductApi(1));
    }
    if (logic == "highToLow") {
      dispatch(allProductApi(-1));
    }
  };

  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };

  useEffect(() => {
    dispatch(allProductApi());
  }, []);

  useEffect(() => {
    setList(all_product);
  }, [all_product]);

  const applyFilters = () => {
    let updatedList = all_product;
    //category brand
    const brandsChecked = brands
      .filter((item) => item.checked)
      .map((item) => item.label);

    if (brandsChecked.length) {
      updatedList = updatedList.filter((item) =>
        brandsChecked.includes(item.brand)
      );
    }
    // Price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter((item) => {
      return item.priceSort >= minPrice && item.priceSort <= maxPrice;
    });

    setList(updatedList);

    // !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedPrice, brands]);

  return (
    <>
    <div style={{width :"1000px", margin:"auto"}}>
    <div className={styles.top_bed_image}><img src="/Images/bed.png"/></div>
    <Filter
     handleFilter={handleFilter }   
     selectedPrice={selectedPrice} 
     changedPrice={handleChangePrice}
     brands={brands}
     handleChangeChecked={handleChangeChecked}
     />
    <div className={styles.prod_main}>
     
 
      {list.map((item)=>{ 
          
        return(
       
          <ProductCard key={item.id} item={item}/>
          
        )
      })},
      
     
    </div>

  
    </div>
    <div>

      <PopularSlider/>
      <div className={style.heading}>SIGN UP AND GET A CHANCE TO WIN THE GIVEAWAY OF THE WEEK.</div>
      <div className={style.inputContainer}>
          <input placeholder="Your Email ID"/>
          <button>SUBSCRIBE</button>
      </div>
      <TopFooter/>
      <MiddleFooter/>
      <BottomFooter/>
    </div>
  
    </>
  );
};
