import React from 'react'
import Slider from "react-slick";
import style from "../../css/popularSlider.module.css"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch,useSelector } from 'react-redux';
import { allProductApi } from '../../Redux/Allproduct/productApi';
import { useState,useEffect } from "react";
import { PopularSliderCard } from './PopularSliderCard';
export const PopularSlider = () => {
    const [sliderRef, setSliderRef] = useState(null);
    const dispatch = useDispatch();
    const {all_product} = useSelector((state)=>state.allproduct_reducer )
    useEffect(()=>{
        
        dispatch(allProductApi())
    },[])
    const sliderSettings = {
      // ...
      
      slidesToShow: 4,
      lazyLoad: true,
      slidesToScroll: 4,
      infinite: false,
      arrows: false,
      speed: 900, // ms
      autoplay: false,
      initialSlide: 5,
      responsive: [
        {
          breakpoint: 1168,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 868,
          settings: {
            slidesToShow:4,
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
      initialSlide: 1,
      // lazyLoad: true,
      autoplaySpeed: 3000,
      slidesToShow: 4,
      slideToScroll: 5,
      infinite: false,
    };
  
    return(
        <div className={style.popularContainer}>   
                <button 
                    onClick={sliderRef?.slickPrev}
                    className={style.leftSliderbuttton}
                >
                    <FiChevronRight className={style.leftButton} />
                </button>
                <button
                    onClick={sliderRef?.slickNext}
                    className={style.rightSliderButtton}
                >
                    <FiChevronLeft />
                </button>
                <div className={style.exploreHeading}>Popular Across Site</div>
                <div className={style.headingUnderLine}></div>
                <Slider ref={setSliderRef} {...sliderSettings} {...settings} className={style.popularSubContainer} >
                   {
                       all_product.map((item)=>{
                           return(
                               <PopularSliderCard item={item}  />
                           )
                       })
                   }
                </Slider>
         </div>
    )
}
