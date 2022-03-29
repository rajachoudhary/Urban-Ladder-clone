import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import styles from "../../css/LogIn.module.css";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { loginApi, registerApi, socialApi } from "../../Redux/User/userApi";
import { useDispatch } from "react-redux";

export function LogModal(props) {
  let [email, setEmail] = React.useState("");
  let [pass, setPass] = React.useState("");
  const dispatch = useDispatch();
  let [passType, setPassType] = React.useState("password");
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ width: "76%", marginLeft: "12%" }}
    >
      <div className={styles.moduleMain}>
        <div className={styles.moduleLeft}></div>
        <div className={styles.moduleRight}>
          <div className={styles.closeButton} onClick={props.onHide}>
            Close
          </div>
          <div className={styles.header}>SIGN UP FOR SALE UPDATES</div>
          {props.login ? (
            <div className={styles.explore}>Login to explore great designs</div>
          ) : (
            <div className={styles.explore}>
              Get ideas, inspirations &amp; offers in your inbox
            </div>
          )}
          {props.login ? (
            <div className={styles.log}>LOGIN WITH YOUR EMAIL ID</div>
          ) : (
            <div className={styles.log}>BE THE FIRST TO KNOW.</div>
          )}
          <div className={styles.hr}></div>
          <input
            className={styles.input}
            placeholder="Email Address"
            value={email}
            type="email"
            required="true"
            autoFocus="autofocus"
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <div>
            <input
              id="password"
              required="true"
              className={styles.input}
              placeholder="Password"
              type={passType}
              autoFocus="autofocus"
              value={pass}
              onChange={(e) => setPass(e.currentTarget.value)}
            />
            {props.login ? (
              <div className={styles.forgetPass}>Forget Password?</div>
            ) : passType === "text" ? (
              <div
                className={styles.forgetPass}
                onClick={() => {
                  setPassType("password");
                }}
                style={{ cursor: "pointer" }}
              >
                Hide Password
              </div>
            ) : (
              <div
                className={styles.forgetPass}
                onClick={() => {
                  setPassType("text");
                }}
                style={{ cursor: "pointer" }}
              >
                Show Password
              </div>
            )}
          </div>
          {props.login ? (
            <button
              onClick={() => loginApi({ email, pass })(dispatch)}
              className={styles.logButton}
            >
              Log In
            </button>
          ) : (
            <button
              onClick={() => registerApi({ email, pass })(dispatch)}
              className={styles.logButton}
            >
              Sign Up
            </button>
          )}
          <div className={styles.chooseSign}>
            Don't have an account?{" "}
            {props.login ? (
              <span
                style={{ color: "#ed7745", cursor: "pointer" }}
                onClick={() => props.setLogin(false)}
              >
                Sign-up
              </span>
            ) : (
              <span
                style={{ color: "#ed7745", cursor: "pointer" }}
                onClick={() => props.setLogin(true)}
              >
                Log-In
              </span>
            )}
          </div>
          <div className={styles.log}>SOCIAL SIGN-IN</div>
          <div className={styles.hr}></div>
          <button
            className={`${styles.social} ${styles.facebook}`}
            onClick={() => {
              window.location.href =
                "https://urbanladderclone.herokuapp.com/api/auth/facebook";
            }}
          >
            <FontAwesomeIcon icon={faFacebookF} />
            <span>Connect</span>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
          <button
            onClick={() => {
              window.location.href =
                "https://urbanladderclone.herokuapp.com/api/auth/google";
            }}
            className={`${styles.social} ${styles.google}`}
          >
            <FontAwesomeIcon icon={faGoogle} />
            <span>Connect</span>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
    </Modal>
  );
}
