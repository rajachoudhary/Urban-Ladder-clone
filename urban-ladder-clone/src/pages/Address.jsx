import React from "react";
import { useEffect, useState } from "react";
import Nav from "../components/subcomponents/Nav";
import Totalamt from "../components/subcomponents/Totalamt";
import styles from "../css/address.module.css";
import { useNavigate } from "react-router-dom";

export default function AddressForm() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    fetch(`https://urbanladderclone.herokuapp.com/api/cart`)
      .then((res) => res.json())
      .then((data) => setCartItems(data));
  }, []);

  const handleContinue = () => {
    //   if (.email) {
    navigate("/cart/address/payment");
    //   }
    //   else {
    //     alert("Please fill your personal details")
    //   }
  };

  return (
    <div className={styles.address}>
      {/* cart_navbar */}

      <Nav />

      {/* body */}
      <div className={styles.maindiv}>
        <div className={styles.sec}>
          <div className={styles.adrsform}>
            <div className={styles.upperhead}>Shipping Address</div>
            <div className={styles.adrsinput}>
              <div>
                <label>
                  Email<sup className={styles.star}>*</sup>
                </label>
              </div>
              <div className={styles.inpt}>
                <input
                  type="email"
                  name="email"
                  // value={userForm.email}
                  // onChange={handleuserFormChange}
                  placeholder="Enter Email"
                />
              </div>
            </div>
            <div className={styles.adrsinput}>
              <div>
                <label>
                  PIN code<sup className={styles.star}>*</sup>
                </label>
              </div>
              <div className={styles.inpt}>
                <input
                  type="text"
                  name="pin"
                  maxlength="6"
                  pattern="[0-9]{6}"
                  // value={userForm.pin}
                  // onChange={handleuserFormChange}
                  placeholder="PIN code"
                />
              </div>
            </div>
            <div className={styles.adrsinput}>
              <div>
                <label>
                  Address<sup className={styles.star}>*</sup>
                </label>
              </div>
              <div className={styles.inpt}>
                <textarea
                  name="Address"
                  placeholder="Address"
                ></textarea>
              </div>
            </div>

            <div className={styles.adrsinput}>
              <div>
                <label>
                  First Name<sup className={styles.star}>*</sup>
                </label>
              </div>
              <div className={styles.inpt}>
                <input
                  type="text"
                  name="fname"
                  // value={userForm.fname}
                  // onChange={handleuserFormChange}
                  placeholder="First Name"
                />
              </div>
            </div>
            <div className={styles.adrsinput}>
              <div>
                <label>
                  Last Name<sup className={styles.star}>*</sup>
                </label>
              </div>
              <div className={styles.inpt}>
                <input
                  type="text"
                  name="lname"
                  // value={userForm.lname}
                  // onChange={handleuserFormChange}
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className={styles.adrsinput}>
              <div>
                <label>
                  Mobile<sup className={styles.star}>*</sup>
                </label>
              </div>
              <div>
                <div className={styles.code}>+91</div>
                <div className={styles.inpt}>
                  <input
                    type="tel"
                    name="phone"
                    // value={userForm.phone}
                    // onChange={handleuserFormChange}
                    placeholder="Enter 10 digit mobile number"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.gst}>
            <div className={styles.upperhead}>Buying for your business</div>
            <div className={styles.gstinpt}>
              <div>GSTIN</div>
              <div>
                <input type="text" placeholder="Enter GSTIN number" />
              </div>
            </div>
            <div>
              Note: GSTIN cannot be changed after placing order. Please provide
              a valid GSTIN - if you don't, we will not be able to pass the GST
              credit to you. GST Registration state must match either billing or
              shipping state. For any GSTIN belonging to a SEZ, please write to
              us at hello@urbanladder.com before placing the order and we will
              ensure appropriate processing of invoice(s).
            </div>
          </div>
          <button onClick={handleContinue}>SAVE AND CONTINUE</button>
        </div>
        <div className={styles.midsec}>
          <div>Billing Address</div>
          <div>
            <input type="checkbox" checked="checked" />
            <div>Use Shipping Address</div>
          </div>
        </div>
        <div className={styles.sec}>
          <div className={styles.upperhead}>Order Summery</div>
          <div>
            {cartItems.map((data) => {
              return (
                <div key={data.id} className={styles.heading}>
                  <div className={styles.adrsprod}>
                    <div className={styles.imageDiv}>
                      <img
                        className={styles.adrsProdimg}
                        src={data.image}
                        alt=""
                      />
                    </div>
                    <div className={styles.detailsDiv}>
                      <div>
                        <b>{data.name}</b>
                      </div>
                      <div>{data.color}</div>
                      <div>Quantity: 1</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Totalamt />
        </div>
      </div>
    </div>
  );
}
