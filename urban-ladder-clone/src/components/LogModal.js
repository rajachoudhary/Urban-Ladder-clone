import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Modal } from "react-bootstrap";
import styles from "../css/LogIn.module.css";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";

export function LogModal(props) {
  let [email, setEmail] = React.useState("");
  let [pass, setPass] = React.useState("");
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
          <div className={styles.explore}>Login to explore great designs</div>
          <div className={styles.log}>LOGIN WITH YOUR EMAIL ID</div>
          <div className={styles.hr}></div>
          <input
            className={styles.input}
            placeholder="Email Address"
            value={email}
            autoFocus="autofocus"
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <div>
            <input
              className={styles.input}
              placeholder="Password"
              type="password"
              autoFocus="autofocus"
              value={pass}
              onChange={(e) => setPass(e.currentTarget.value)}
            />
            <div className={styles.forgetPass}>Forget Password?</div>
          </div>
          <button className={styles.logButton}>Log In</button>
          <div className={styles.chooseSign}>
            Don't have an account?<span>Sign-up</span>
          </div>
          <div className={styles.log}>SOCIAL SIGN-IN</div>
          <div className={styles.hr}></div>
          <button
            className={`${styles.social} ${styles.facebook}`}
            onClick={() =>
              (window.location.href = "http://localhost:8000/auth/facebook")
            }
          >
            <FontAwesomeIcon icon={faFacebookF} />
            <span>Connect</span>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
          <button
            onClick={() =>
              (window.location.href = "http://localhost:8000/auth/google")
            }
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
