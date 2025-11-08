import React, { useState } from "react";
import styles from "../styles/header.module.css";
import { Link } from "react-router-dom";
import icon from "../assets/icon.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link to="/" className={styles.logoContainer}>
          <img src={icon} alt="Stamply logo" className={styles.logo} />
          <span className={styles.logoText}>Stamply</span>
        </Link>

        {/* Hamburger (mobile) */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Nav links */}
        <nav className={`${styles.nav} ${menuOpen ? styles.showMenu : ""}`}>
          <Link to="/pricing" className={styles.link}>Pricing</Link>
          <a href="#blog" className={styles.link}>Blog</a>
          <Link to="/support" className={styles.link}>Contact</Link>
        </nav>

        {/* CTA */}
        <div className={styles.buttonContainer}>
          <Link to="/signup" className={styles.getStartedButton}>Get Started</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
