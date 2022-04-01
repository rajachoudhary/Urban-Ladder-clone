import React from "react";
import { useEffect, useState } from "react";

import styles from "../css/cart.module.css";
import Nav from "../components/subcomponents/Nav";
import Totalamt from "../components/subcomponents/Totalamt";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.User);
    const getCart = ()=> {
      axios
      .get(
        "https://urbanladderclone.herokuapp.com/api/cart",
        
        {
          headers: {
            accesstoken: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        console.log(res)
      })
      
      .catch((err)=>{
        console.log(err)
      })
    }
  useEffect(() => {
    getCart()

  }, []);

  const handleDel = () => {};
  const handleCheckoutCart = () => {
    navigate("/address");
  };
  const handleContinueShopping = () => {
    navigate("/products");
  };

  return (
    <div className={styles.cart}>
      {/* cart_navbar */}

      <Nav />

      {/* stepper */}

      <stepper className="stepper"></stepper>

      {/* offer details */}

      <div className={styles.offer}>
        <ul>
          <li>No Cost EMIs on Credit Cards!</li>
          <li>
            Purchase a mattress along with bed & get extra 10%OFF upto Rs.1000.
            Use code: HAPPYSLEEP
          </li>
          <li>
            Due to high demand, our deals may change anytime during sale. Grab
            all you want before it's gone!
          </li>
        </ul>
      </div>

      {/* cart list */}

      <div className={styles.heading}>
        <div className={styles.cartprod}>PRODUCTS</div>
        <div className={styles.headdata}>DELIVERY DATE</div>
        <div className={styles.headdata}>QUANTITY</div>
        <div className={styles.headdata}>TOTAL</div>
      </div>
      <div>
        <div>
          {cartItems.map((data) => {
            return (
              <div key={data.id} className={styles.heading}>
                <div className={styles.cartprod}>
                  <div className={styles.imageDiv}>
                    <img src={data.image} alt="" />
                  </div>
                  <div className={styles.detailsDiv}>
                    <div>{data.name}</div>
                    <div>{data.color}</div>
                  </div>
                </div>
                <div className={styles.cartdata}>{data.date}</div>
                <div className={styles.cartdata}>
                  <select>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                  </select>
                </div>
                <div className={styles.cartdata}>
                  {data.price}
                  <div className={styles.delbtn}>
                    <button onClick={handleDel}>X</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* billing amount */}

      <div className={styles.billingsec}>
        <div className={styles.imgsec}>
          <img
            className={styles.payimg}
            src={
              "https://www.ulcdn.net/assets/spree/frontend/paymentMode/rupay-gray-d3669859faa810034818f90a821ccbf2.png "
            }
            alt=""
          />
          <img
            className={styles.payimg}
            src={
              "https://www.ulcdn.net/assets/spree/frontend/paymentMode/Bhim-upi-gray-52fb6904f152e87013c3da2352997f90.png"
            }
            alt=""
          />
          <img
            className={styles.payimg}
            src={
              "https://www.ulcdn.net/assets/spree/frontend/paymentMode/VISA-verified-gray-071bc1fbd8561b3bf044e3ac3037eca5.png"
            }
            alt=""
          />
          <img
            className={styles.payimg}
            src={
              "https://www.ulcdn.net/assets/spree/frontend/paymentMode/mastercard-gray-ada104aa6eb18055113b049ae1994f11.png"
            }
            alt=""
          />
          <img
            className={styles.payimg}
            src={
              "https://www.ulcdn.net/assets/spree/frontend/paymentMode/norton-secured-gray-9525120b9e171ac18de6eb9dd6143106.png"
            }
            alt=""
          />
          <img
            className={styles.payimg}
            src={
              "https://www.ulcdn.net/assets/spree/frontend/paymentMode/amex-safekey-gray-66917d54dd2e4f3ce9ac62fd8f6a9e6e.png"
            }
            alt=""
          />
        </div>

        <div>
          <div className={styles.billhead}>Apply Coupon/Voucher</div>
          <Totalamt />
          <div>
            <button onclick={handleContinueShopping} className={styles.backbtn}>
              CONTINUE SHOPPING
            </button>
            <button onClick={handleCheckoutCart} className={styles.nextbtn}>
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
      <Outlet/>
    </div>
  );
}
