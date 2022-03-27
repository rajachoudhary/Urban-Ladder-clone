import React from 'react'
import style from "../css/middleNavbar.module.css"
import { ReactComponent as LogoBox } from '../svgFiles/logoBox.svg'
import { ReactComponent as UrbanLadder } from '../svgFiles/urbanLadder.svg'
import { ReactComponent as TrackItem } from '../svgFiles/trackItem.svg'
import { ReactComponent as User } from '../svgFiles/user.svg'
import { ReactComponent as Like } from '../svgFiles/like.svg'
import { ReactComponent as Cart } from '../svgFiles/cart.svg'

export const MiddleNavbar = () => {
     return (
      <>
        <div className={style.middleNavbarContainer}>
        <div>
            <LogoBox />
            <UrbanLadder/>
        </div>
        <div>
            <input placeholder='Search' />
        </div>
        <div>
            <TrackItem/> 
            <User/>
            <Like/>
            <Cart/> 
        </div>
    </div>
    <div className={style.footerLine}></div>
    </>
  )
}
