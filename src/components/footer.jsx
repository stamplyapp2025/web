import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()} <strong>WinStamp</strong>. All rights reserved.
        &nbsp;|&nbsp;
        <Link to="/privacy" className={styles.link}>Privacy Policy</Link>
        &nbsp;|&nbsp;
        <Link to="/support" className={styles.link}>Support</Link>
      </p>
    </footer>
  );
};

export default Footer;
