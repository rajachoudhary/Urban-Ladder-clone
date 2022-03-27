import React from 'react'
import { ReactComponent as QuestionMark } from '../svgFiles/questionMark.svg'
import { ReactComponent as TrackItem } from '../svgFiles/trackItem.svg'
import style from "../css/topNavbar.module.css"
export const TopNavbar = () => {
  return (
      <>
    <div className={style.topNavbarContainer}>
        <div>
            <div>
                <QuestionMark/>
                <div>Help</div>
            </div>
            <div>
                <TrackItem/>
                <div>Track Order</div>
            </div>
        </div>
        <div>
            <div>Stores</div>
            <div>Bulk Orders</div>
            <div>Gift Cards</div>
        </div>
    </div>
    <hr className={style.topNavbarHr}/>
    </>
  )
}
