import React from "react";
import styles from "../styles/header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.link}>
        <div className={styles.logoContainer}>
          <div className={styles.logoMark}>S</div>
          <span className={styles.logoText}>Stamply</span>
        </div>
      </Link>

      <nav className={styles.nav}>
        <Link to="/pricing" className={styles.link}>Pricing</Link>
        <a href="#blog" className={styles.link}>Blog</a>
        <Link to="/support" className={styles.link}>Contact</Link>
      </nav>

      <div className={styles.buttonContainer}>
        <button className={styles.downloadButton}>Download</button>
        <Link to="/signup" className={styles.link}>Get Started</Link>
      </div>
    </header>
  );
};

export default Header;
