import React from 'react'
import styles from '../../css/totalamt.module.css'
//import {useState} from 'react'


export default function Totalamt() {

    

  return (
    <div className={styles.bills}>
        <div className={styles.amtlist}>
            <div>Cart Total</div>
            <div>`₹cartsum`</div>
        </div>
        <div className={styles.amtlist}>
            <div>Discounts</div>
            <div>-₹0</div>
        </div>
        <div className={styles.amtlist}>
            <div>Delivery Charges</div>
            <div>FREE</div>
        </div>
        <div className={styles.amtlist}>
            <div>Total Payble Amount</div>
            <div>total sum</div>
        </div>  
        <div className={styles.amtlist}>
            <div><b>Booking Amount (Pay Now)</b></div>
            <div><b>total sum</b></div>
        </div>  
    </div>
  )
}
