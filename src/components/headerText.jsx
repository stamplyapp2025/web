import React from "react";
import styles from "../styles/headerText.module.css";
import { Link } from "react-router-dom";

export default function HeaderText() {
  return (
    <div className={styles.promoContainer}>
      <h1 className={styles.promoTitle}>
        The loyalty app that helps your business to grow
      </h1>
      <p className={styles.promoSubtitle}>
        Do you want to get more out of your digital loyalty program?<br />
        Now you can!
      </p>
      <div className={styles.promoButtons}>
        <button className={styles.btnOutline}>Download</button>
        <Link to="/signup" className={styles.btnFilled}>Get Started</Link>
      </div>
    </div>
  );
}
