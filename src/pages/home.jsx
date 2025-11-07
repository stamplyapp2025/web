import React from "react";
import PromoCard from "../components/promoCard";
import PricingPage from "./pricing";
import styles from"../styles/home.module.css"; 
import SupportPage from "./support";
import HeaderText from "../components/headerText";

export default function HomePage() {
  return (
    <div className={styles.homeContainer}>
      <section className={styles.topSection}>
        <HeaderText/>
        <PromoCard/>
        <section className={styles.bottomSection}/>
      </section>
      <PricingPage/>
      <SupportPage/>
    </div>
  );
}
