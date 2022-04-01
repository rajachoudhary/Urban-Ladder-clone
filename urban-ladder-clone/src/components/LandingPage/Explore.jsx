import React from "react";
import style from "../../css/explore.module.css";
// import { ReactComponent as Sofas } from "../../svgFiles/sofas.svg";
import { ReactComponent as Beds } from "../../svgFiles/beds.svg";
import { ReactComponent as Dininig } from "../../svgFiles/dining.svg";
import { ReactComponent as TvUnits } from "../../svgFiles/tvUnits.svg";
import { ReactComponent as Matresses } from "../../svgFiles/matresses.svg";
import { ReactComponent as Seating } from "../../svgFiles/seating.svg";
import { ReactComponent as CoffeeTables } from "../../svgFiles/coffeeTables.svg";
import { ReactComponent as CupBoards } from "../../svgFiles/cupboards.svg";
import { ReactComponent as Recliners } from "../../svgFiles/recliners.svg";
import { ReactComponent as Storage } from "../../svgFiles/storage.svg";
import { ReactComponent as Study } from "../../svgFiles/study.svg";
import { ReactComponent as BookShelves } from "../../svgFiles/bookshelves.svg";
import { ReactComponent as Shoeracks } from "../../svgFiles/shoeracks.svg";
import { ReactComponent as Decor } from "../../svgFiles/decor.svg";
import { ReactComponent as AllFurniture } from "../../svgFiles/allFurniture.svg";
import { ReactComponent as Sofas } from "../../svgFiles/sofas.svg";
import { Link } from "react-router-dom";
export const Explore = () => {
  return (
    <div className={style.exploreContainer}>
      <div className={style.exploreHeading}>Explore Our Furniture Range</div>
      <div className={style.headingUnderLine}></div>
      <div class={style.exploreImageContainer}>
        <Link to="/products?category=beds">
          <Sofas class={style.exploreImage} />
          <p class={style.exploreImageName}>Sofas</p>
        </Link>
        <a href="">
          <Beds class={style.exploreImage} />
          <p class={style.exploreImageName}>Beds</p>
        </a>
        <a href="">
          <Dininig class={style.exploreImage} />
          <p class={style.exploreImageName}>Dininig</p>
        </a>
        <a href="">
          <TvUnits class={style.exploreImage} />
          <p class={style.exploreImageName}>Sofas</p>
        </a>
        <a href="">
          <Matresses class={style.exploreImage} />
          <p class={style.exploreImageName}>Matresses</p>
        </a>
        <a href="">
          <Seating class={style.exploreImage} />
          <p class={style.exploreImageName}>Seating</p>
        </a>
        <a href="">
          <CoffeeTables class={style.exploreImage} />
          <p class={style.exploreImageName}>Sofas</p>
        </a>
        <a href="">
          <Sofas class={style.exploreImage} />
          <p class={style.exploreImageName}>Coffee Tables</p>
        </a>
        <a href="">
          <CupBoards class={style.exploreImage} />
          <p class={style.exploreImageName}>CupBoards</p>
        </a>
        <a href="">
          <Recliners class={style.exploreImage} />
          <p class={style.exploreImageName}>Sofas</p>
        </a>
        <a href="">
          <Storage class={style.exploreImage} />
          <p class={style.exploreImageName}>Storage</p>
        </a>
        <a href="">
          <Study class={style.exploreImage} />
          <p class={style.exploreImageName}>Study</p>
        </a>
        <a href="">
          <BookShelves class={style.exploreImage} />
          <p class={style.exploreImageName}>BookShelves</p>
        </a>
        <a href="">
          <Shoeracks class={style.exploreImage} />
          <p class={style.exploreImageName}>Shoeracks</p>
        </a>
        <a href="">
          <Decor class={style.exploreImage} />
          <p class={style.exploreImageName}>Decor</p>
        </a>
        <a href="">
          <AllFurniture class={style.exploreImage} />
          <p class={style.exploreImageName}>All Furniture</p>
        </a>
      </div>
    </div>
  );
};
