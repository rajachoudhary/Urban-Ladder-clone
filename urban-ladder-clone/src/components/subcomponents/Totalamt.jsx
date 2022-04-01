import React from 'react'
import styles from '../../css/totalamt.module.css'
//import {useState} from 'react'


export default function Totalamt({total_price,total_discount}) {

    

  return (
    <div className={styles.bills}>
        <div className={styles.amtlist}>
            <div>Cart Total</div>
            <div>₹{total_price}</div>
        </div>
        <div className={styles.amtlist}>
            <div>Discounts</div>
            <div>₹{total_price - total_discount}</div>
        </div>
        <div className={styles.amtlist}>
            <div>Delivery Charges</div>
            <div>FREE</div>
        </div>
        <div className={styles.amtlist}>
            <div>Total Payble Amount</div>
            <div>₹{total_price-(total_price - total_discount)}</div>
        </div>  
        <div className={styles.amtlist}>
            <div><b>Booking Amount (Pay Now)</b></div>
            <div><b>₹{total_price-(total_price - total_discount)}</b></div>
        </div>  
    </div>
  )
}
