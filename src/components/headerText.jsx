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
        Do you want to get more out of your digital loyalty program?
        <br />
        Now you can!
      </p>
      <div className={styles.promoButtons}>
        {/* Apple Store badge */}
        <a
          href="https://apps.apple.com/us/app/stamply-loyalty-rewards/id6754992983" // <-- replace with your actual App Store link
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
            alt="Download on the App Store"
            className={styles.appStoreBadge}
          />
        </a>

        {/* Signup button */}
        <Link to="/signup" className={styles.btnFilled}>
          Get Started
        </Link>
      </div>
    </div>
  );
}
