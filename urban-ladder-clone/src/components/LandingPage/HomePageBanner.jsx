import React from 'react'
import { Carousel } from "react-bootstrap";
import "../../css/homePageBanner.css"
import style from "../../css/homePageBanner.module.css"
export const HomePageBanner = () => {
  
  return (
    <div className={style.bannerImageContainer} >
         <Carousel variant="dark"style={{paddingBottom:"0"}}>
        <Carousel.Item>
          <img
            className="d-block w-100 bannerImage"
            src="https://www.ulcdn.net/media/slideshow/Colour-Crush-Sale-End-Slideshow.jpg?1648132643"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100 bannerImage"
            src="https://www.ulcdn.net/media/slideshow/SimplyWud-Slideshow.jpg?1647843445"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 bannerImage"
            src="https://www.ulcdn.net/media/slideshow/Slideshow-Mattress_HAPPYSLEEP.jpg?1646114069"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 bannerImage"
            src="https://www.ulcdn.net/media/slideshow/Recliners-slideshow-Desktop.jpg?1648039599"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
