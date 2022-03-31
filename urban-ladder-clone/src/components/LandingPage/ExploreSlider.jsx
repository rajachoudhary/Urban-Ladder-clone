import React from 'react'
import Slider from "react-slick";
import styles from "../../css/explore.module.css"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch,useSelector } from 'react-redux';
import { allProductApi } from '../../Redux/Allproduct/productApi';
import { useState,useEffect } from "react";
export const ExploreSlider = ({item}) => {
  
    const [sliderRef, setSliderRef] = useState(null);
    const [data,setData] = useState();
    const dispatch = useDispatch();
    const {all_product} = useSelector((state)=>state.allproduct_reducer )
    useEffect(()=>{
        
        dispatch(allProductApi())
    },[])
    const {title,sub_title,brand,price,discount_price,emi,img} = item;
    const sliderSettings = {
      // ...
      slidesToShow: 5,
      lazyLoad: true,
      slidesToScroll: 3,
      infinite: false,
      arrows: false,
      speed: 900, // ms
      autoplay: false,
      initialSlide: 1,
      responsive: [
        {
          breakpoint: 1168,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 868,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 568,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
          }
        }
      ],
    };
  
    const settings = {
      // fade: true,
      speed: 50, // ms
      autoplay: false,
      initialSlide: 2,
      // lazyLoad: true,
      autoplaySpeed: 3000,
      slidesToShow: 7,
      slideToScroll: 5,
      infinite: false,
    };
  
    return(
        <div>
            <div className={styles.sliderContainer}>
                <button
                    onClick={sliderRef?.slickPrev}
                    className={styles.leftSliderbuttton}
                >
                    <FiChevronLeft className={styles.leftButton} />
                </button>
                <button
                    onClick={sliderRef?.slickNext}
                    className={styles.rightSliderButtton}
                >
                    <FiChevronRight />
                </button>
                <Slider ref={setSliderRef} {...sliderSettings} {...settings}>
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
                </Slider>
            </div>
         </div>
    )
}
